/* App.js - main application logic (vanilla JS)
   Features:
   - Load students/questions from global window.* objects
   - Populate subject list
   - Lookup student by exam number and class
   - Randomly pick required number of questions per subject/class
   - Timer per subject type
   - Previous / Next navigation
   - Store + sort scores in localStorage
   - Download results as printable page (student can Save as PDF)
*/

/* CONFIG */
const SUBJECT_TIMERS = {
  Mathematics: 15 * 60,
  Chemistry: 12 * 60,
  Biology: 10 * 60,
  Physics: 12 * 60,
  "English": 10 * 60,
  "English Language": 10 * 60 // support alternative label
};
const MAIN_SUBJECT_NAMES = ["Mathematics","Chemistry","Biology","Physics","English","English Language"];
const DEFAULT_TIMEMIN = 7 * 60;
const SUBJECT_DISPLAY_COUNT = (subject) => {
  if (MAIN_SUBJECT_NAMES.includes(subject)) return 30;
  return 20;
};

/* Helpers */
function getQuestionsFor(classKey, subject) {
  const map = {
    ss1: window.questionsSS1 || {},
    ss2: window.questionsSS2 || {},
    ss3: window.questionsSS3 || {}
  };
  const list = map[classKey] || {};
  // try both exact and trimmed names
  return list[subject] || list[subject.replace(" English Language","English")] || [];
}
function getStudentsFor(classKey) {
  return {
    ss1: window.studentsSS1 || [],
    ss2: window.studentsSS2 || [],
    ss3: window.studentsSS3 || []
  }[classKey] || [];
}
function findStudent(classKey, examNum) {
  const arr = getStudentsFor(classKey);
  return arr.find(s => (s.examNum||"").toLowerCase() === (examNum||"").toLowerCase()) || null;
}
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

/* STORAGE */
const STORAGE_KEY = "cbt_scores_v1";
function loadScores(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }catch(e){return []}}
function saveScores(list){ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }

/* UI elements */
const S = window.CBT_UI.selectors;

/* populate subject select based on union of questions files */
function populateSubjects() {
  const subjectsSet = new Set();
  [window.questionsSS1, window.questionsSS2, window.questionsSS3].forEach(obj=>{
    if (!obj) return;
    Object.keys(obj).forEach(k=>subjectsSet.add(k));
  });
  // ensure consistent ordering with common subjects first
  const common = ["Mathematics","English","English Language","Chemistry","Biology","Physics"];
  const subjects = Array.from(subjectsSet);
  subjects.sort((a,b)=>{
    const ai = common.indexOf(a), bi = common.indexOf(b);
    if (ai>=0 && bi>=0) return ai-bi;
    if (ai>=0) return -1;
    if (bi>=0) return 1;
    return a.localeCompare(b);
  });
  S.subjectSelect.innerHTML = subjects.map(s=>`<option value="${s}">${s}</option>`).join("");
}
populateSubjects();

/* Start exam flow */
let state = {
  student: null,
  classKey: "key",
  subject: null,
  questions: [],
  answers: {},
  currentIndex: 0,
  timer: null,
  timeLeft: 0
};

function showMessage(msg, isError=false){
  S.messages.textContent = msg;
  S.messages.style.color = isError ? "var(--danger)" : "var(--muted)";
}

/* display student details */
function displayStudentDetails(student){
  if(!student) {
    S.studentDetails.classList.add("hidden");
    return;
  }
  S.studentDetails.classList.remove("hidden");
  S.studentDetails.innerHTML = `
    <strong>${student.name}</strong> <span class="muted">(${student.class})</span><br/>
    Exam No: ${student.examNum} <br/>
    Gender: ${student.gender} <br/>
    Subject Offered: ${student.subject}
  `;
}

/* prepare questions */
function prepareQuestions(classKey, subject){
  const pool = getQuestionsFor(classKey, subject) || [];
  if(!Array.isArray(pool) || pool.length===0) return [];
  // decide how many to pick
  const count = Math.min(SUBJECT_DISPLAY_COUNT(subject), pool.length);
  const shuffled = shuffle(pool);
  return shuffled.slice(0, count);
}

/* render one question */
function renderQuestion(index){
  const q = state.questions[index];
  if(!q) {
    S.questionArea.innerHTML = "<p>No question</p>";
    return;
  }
  const selected = state.answers[q.id];
  const opts = q.options.map((opt, i)=>`
    <div class="option ${selected===i?'selected':''}" data-index="${i}" data-qid="${q.id}">
      ${String.fromCharCode(65+i)}. ${opt}
    </div>
  `).join("");
  S.questionArea.innerHTML = `
    <div class="question">
      <h4>Q${index+1}. ${q.text}</h4>
      ${q.img ? `<img src="${q.img}" alt="question image">` : ""}
      <div class="options">${opts}</div>
    </div>
  `;
  // attach option click listeners
  S.questionArea.querySelectorAll(".option").forEach(el=>{
    el.addEventListener("click", (ev)=>{
      const qid = el.getAttribute("data-qid");
      const idx = Number(el.getAttribute("data-index"));
      state.answers[qid] = idx;
      renderQuestion(state.currentIndex);
      updateProgress();
    });
  });
}

/* update progress bar text */
function updateProgress(){
  S.progress.textContent = `Question ${state.currentIndex+1} of ${state.questions.length} — Answered ${Object.keys(state.answers).length}`;
}

/* timer */
function startTimer(seconds){
  clearInterval(state.timer);
  state.timeLeft = seconds;
  S.timerEl.textContent = formatTime(state.timeLeft);
  state.timer = setInterval(()=>{
    state.timeLeft--;
    S.timerEl.textContent = formatTime(state.timeLeft);
    if(state.timeLeft<=0){
      clearInterval(state.timer);
      handleSubmit(true); // time up
    }
  }, 1000);
}
function formatTime(sec){
  const mm = Math.floor(sec/60).toString().padStart(2,"0");
  const ss = (sec%60).toString().padStart(2,"0");
  return `${mm}:${ss}`;
}

/* navigation handlers */
S.prevBtn.addEventListener("click", ()=>{
  if(state.currentIndex>0){
    state.currentIndex--;
    renderQuestion(state.currentIndex);
    updateProgress();
  }
});
S.nextBtn.addEventListener("click", ()=>{
  if(state.currentIndex < state.questions.length-1){
    state.currentIndex++;
    renderQuestion(state.currentIndex);
    updateProgress();
  }
});

S.submitBtn.addEventListener("click", ()=>handleSubmit(false));

/* compute score and store results */
function handleSubmit(isTimeUp){
  clearInterval(state.timer);
  // compute score
  let correct=0;
  state.questions.forEach(q=>{
    const sel = state.answers[q.id];
    if(typeof sel === "number" && sel === q.answer) correct++;
  });
  const total = state.questions.length;
  const percentage = Math.round((correct/total)*100);

  // save to storage
  const scores = loadScores();
  const entry = {
    timestamp: Date.now(),
    examNum: state.student ? state.student.examNum : "Unknown",
    name: state.student ? state.student.name : "Unknown",
    classKey: state.classKey,
    subject: state.subject,
    score: correct,
    total: total,
    percent: percentage
  };
  scores.push(entry);
  saveScores(scores);

  // show result screen
  S.startScreen.classList.add("hidden");
  S.examScreen.classList.add("hidden");
  S.resultScreen.classList.remove("hidden");

  S.resultSummary.innerHTML = `
    <p><strong>${entry.name}</strong> (${entry.examNum})</p>
    <p>Subject: <strong>${entry.subject}</strong></p>
    <p>Score: <strong>${entry.score} / ${entry.total}</strong> (${entry.percent}%)</p>
    <p>${isTimeUp ? "<em>Time is up. Exam auto-submitted.</em>" : ""}</p>
  `;

  renderRanking(entry.classKey, entry.subject);
}

/* ranking display for same class & subject */
function renderRanking(classKey, subject){
  const scores = loadScores().filter(s => s.classKey === classKey && s.subject === subject);
  scores.sort((a,b)=> b.percent - a.percent || b.score - a.score || a.timestamp - b.timestamp);
  const rows = scores.map((s,idx)=>`
    <tr ${s.examNum=== (state.student?.examNum) ? "style='background:#f7ffef'":""}>
      <td>${idx+1}</td>
      <td>${s.name} <small>(${s.examNum})</small></td>
      <td>${s.score} / ${s.total}</td>
      <td>${s.percent}%</td>
    </tr>
  `).join("");
  S.ranking.innerHTML = scores.length ? `<table><thead><tr><th>#</th><th>Students</th><th>Score</th><th>%</th></tr></thead><tbody>${rows}</tbody></table>` : "<p class='muted'>No scores yet for this class & subject.</p>";
}

/* download as printable (user can Save as PDF) */
S.downloadBtn.addEventListener("click", ()=>{
  const title = document.getElementById("school-name").textContent || "School";
  const subject = state.subject;
  const classDisplay = state.classKey.toUpperCase();
  // create printable HTML
  const scores = loadScores().filter(s => s.classKey === state.classKey && s.subject === subject);
  scores.sort((a,b)=> b.percent - a.percent || b.score - a.score);
  let rows = scores.map((s,idx)=>`<tr><td>${idx+1}</td><td>${s.name}</td><td>${s.examNum}</td><td>${s.score}/${s.total}</td><td>${s.percent}%</td></tr>`).join("");
  if(!rows) rows = `<tr><td colspan="5">No scores recorded</td></tr>`;

  const html = `
    <html>
    <head>
      <title>${title} - ${classDisplay} ${subject} Scores</title>
      <style>
        body{font-family:Arial,Helvetica,sans-serif;padding:24px}
        h1{text-align:center}
        h2{text-align:center;color:#444;margin-top:6px}
        table{width:100%;border-collapse:collapse;margin-top:18px}
        th,td{padding:8px;border:1px solid #ddd;text-align:left}
        th{background:#f3f6fb}
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      <h2>${classDisplay} — ${subject}</h2>
      <table>
        <thead><tr><th>#</th><th>Name</th><th>Exam No</th><th>Score</th><th>%</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <p style="margin-top:14px">Generated: ${new Date().toLocaleString()}</p>
    </body>
    </html>
  `;
  const w = window.open("", "_blank");
  w.document.open();
  w.document.write(html);
  w.document.close();
  // prompt print dialog (user can choose Save as PDF)
  setTimeout(()=> w.print(), 350);
});

/* another exam handler */
S.anotherBtn.addEventListener("click", ()=>{
  // reset to start screen
  S.resultScreen.classList.add("hidden");
  S.startScreen.classList.remove("hidden");
  S.messages.textContent = "";
  S.studentDetails.classList.add("hidden");
  state = { student: null, classKey: "ss1", subject: null, questions: [], answers: {}, currentIndex: 0, timer: null, timeLeft: 0 };
});

/* clear all scores button */
/*S.clearScoresBtn.addEventListener("click", ()=>{
  if(!confirm("Clear all saved scores from localStorage? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  showMessage("All scores cleared.", false);
});*/

/* Start button logic */
S.startBtn.addEventListener("click", () => {
  const examNum = S.examNum.value.trim();
  const classKey = S.classSelect.value;
  const subject = S.subjectSelect.value;
  
  if (!examNum) {
    showMessage("Please enter your Examination Number", true);
    return;
  }
  if (!subject) {
    showMessage("Please select a subject.", true);
    return;
  }
  
  // find student
  const student = findStudent(classKey, examNum);
  if (!student) {
    showMessage("Student not found. Please Check Examination Number and class.", true);
    displayStudentDetails(null);
    return;
  }
  
  // NEW: check if student is offering this subject
  if (!isStudentOfferingSubject(student, subject)) {
    showMessage(`❌ You did not register for ${subject}.`, true);
    displayStudentDetails(student);
    return;
  }
  
  showMessage("");
  displayStudentDetails(student);
  
  // prepare questions
  const pool = getQuestionsFor(classKey, subject);
  if (!pool || pool.length === 0) {
    showMessage("No questions in the database for this subject.", true);
    return;
  }
  
  state.student = student;
  state.classKey = classKey;
  state.subject = subject;
  state.questions = prepareQuestions(classKey, subject);
  state.answers = {};
  state.currentIndex = 0;
  
  // show exam screen
  S.startScreen.classList.add("hidden");
  S.resultScreen.classList.add("hidden");
  S.examScreen.classList.remove("hidden");
  
  S.examSubject.textContent = subject;
  S.examStudent.innerHTML = `${student.name} — ${student.examNum} (${student.class})`;
  
  renderQuestion(0);
  updateProgress();
  
  // timer selection
  const seconds = SUBJECT_TIMERS[subject] || DEFAULT_TIMEMIN;
  startTimer(seconds);
});


/* check students data*/
  S.studentsdataBtn.addEventListener("click", () => {
  const examNum = S.examNum.value.trim();
  const classKey = S.classSelect.value;
  
  if (!examNum) {
    showMessage("Please enter your Examination Number", true);
    return;
  }
  
  const student = findStudent(classKey, examNum);
  if (!student) {
    showMessage("Student not found. Please Check Examination Number and class.", true);
    displayStudentDetails(null);
    return;
  }
  
  showMessage("✅ Student found. See your details below.");
  displayStudentDetails(student);
  
  // Show subjects too
  const subjects = getStudentSubjects(student).join(", ");
  
  S.studentDetails.innerHTML += `
    <br><strong>Subjects:</strong> ${subjects}
  `;
});


/* initial UI state */
S.startScreen.classList.remove("hidden");
S.examScreen.classList.add("hidden");
S.resultScreen.classList.add("hidden");

updateProgress();
