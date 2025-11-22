/* Main app logic:
  - fetch student by exam number
  - select subject and load questions (subject array must exist)
  - filter questions by student's class using optional 'classes' metadata
  - randomize questions and present to student
  - 5 minute timer
  - submit, compute score, save to localStorage, show scoreboard, export PDF
*/

(function(){
  // UI elements
  const subjectSelect = document.getElementById("subjectSelect");
  const examNoInput = document.getElementById("examNo");
  const fetchStudentBtn = document.getElementById("fetchStudentBtn");
  const studentInfo = document.getElementById("studentInfo");
  const stuDisplay = document.getElementById("stuDisplay");
  const startExamBtn = document.getElementById("startExamBtn");

  const examPanel = document.getElementById("examPanel");
  const examForm = document.getElementById("examForm");
  const timerDisplay = document.getElementById("timerDisplay");
  const examStudentName = document.getElementById("examStudentName");
  const examStudentMeta = document.getElementById("examStudentMeta");

  const submitExamBtn = document.getElementById("submitExamBtn");

  const resultPanel = document.getElementById("resultPanel");
  const resultSummary = document.getElementById("resultSummary");
  const scoreboard = document.getElementById("scoreboard");
  const boardTitle = document.getElementById("boardTitle");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");
  const resetBtn = document.getElementById("resetBtn");

  // Variables
  let currentStudent = null;
  let currentSubjectKey = null;
  let selectedQuestions = [];
  let timerInterval = null;
  let timeRemaining = 600; // 5 minutes in seconds

  // Util: find student by exam number
  function findStudent(examNo){
    return Students.find(s => s.examNum.toLowerCase() === examNo.trim().toLowerCase());
  }

  // Util: shuffle
  function shuffle(arr){ 
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  }

  // When Enter clicked: fetch student and show info
  fetchStudentBtn.addEventListener("click", ()=>{
    const examNo = examNoInput.value.trim();
    const subjectValue = subjectSelect.value;
    if(!subjectValue){
      alert("Please select a subject first.");
      return;
    }
    // Check subject exists
    if(!subjectsDatabase[subjectValue]){
      alert("Subject questions not available in database.");
      return;
    }
    const student = findStudent(examNo);
    if(!student){
      studentInfo.classList.remove("hidden");
      stuDisplay.textContent = `Student with exam number "${examNo}" not found.`;
      startExamBtn.disabled = true;
      currentStudent = null;
    } else {
      currentStudent = student;
      studentInfo.classList.remove("hidden");
      stuDisplay.innerHTML = `
        <strong>${student.name}</strong> — ${student.class} • ${student.gender} <br/>
        Selected Subject: <strong>${subjectValue}</strong>
      `;
      startExamBtn.disabled = false;
      currentSubjectKey = subjectValue;
    }
  });

  // Start exam
  startExamBtn.addEventListener("click", ()=>{
    if(!currentStudent) return;
    if(!currentSubjectKey || !subjectsDatabase[currentSubjectKey]){
      alert("Subject questions not available in database.");
      return;
    }

    // Filter questions by student class if classes metadata exists
    const allQ = subjectsDatabase[currentSubjectKey];
    const filtered = allQ.filter(q => {
      if(!q.classes) return true; // if no classes info, include
      return q.classes.includes(currentStudent.class);
    });

    if(filtered.length === 0){
      alert("No questions for this subject & class. Subject questions not available in database.");
      return;
    }

    // Randomize & pick up to 20
    selectedQuestions = shuffle(filtered).slice(0, Math.min(20, filtered.length));
  

    // Build UI
    examForm.innerHTML = ""; // clear
    selectedQuestions.forEach((q, idx) => {
      const div = document.createElement("div");
      div.className = "question-card";
      div.innerHTML = `
        <div class="q-title">Q${idx+1}. ${q.question}</div>
        <div class="options">
          ${Object.entries(q.options).map(([key,val])=>`
            <label class="option">
              <input type="radio" name="q${idx}" value="${key}" />
              <strong style="width:26px;display:inline-block">${key}.</strong> ${val}
            </label>
          `).join("")}
        </div>
      `;
      examForm.appendChild(div);
    });

    // Show exam panel
    document.getElementById("setupPanel").classList.add("hidden");
    examPanel.classList.remove("hidden");
    resultPanel.classList.add("hidden");

    // Show student info in exam header
    examStudentName.textContent = `${currentStudent.name} (${currentStudent.examNum})`;
    examStudentMeta.textContent = `${currentStudent.class} • ${currentStudent.gender} • ${currentSubjectKey}`;

    // Reset timer
    timeRemaining = 600;
    updateTimerDisplay();
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(()=>{
      timeRemaining--;
      updateTimerDisplay();
      if(timeRemaining <= 0){
        clearInterval(timerInterval);
        alert("Time is up! Exam will be submitted automatically.");
        submitExam();
      }
    }, 1000);
  });

  // Timer UI
  function updateTimerDisplay(){
    const mm = String(Math.floor(timeRemaining/60)).padStart(2,"0");
    const ss = String(timeRemaining%60).padStart(2,"0");
    timerDisplay.textContent = `${mm}:${ss}`;

    if(timeRemaining <= 30) {
      timerDisplay.style.background = "linear-gradient(90deg,#fff0f0,#fff)";
      timerDisplay.style.color = "#b91c1c";
    } else {
      timerDisplay.style.background = "";
      timerDisplay.style.color = "";
    }
  }

  // Submit exam (button)
  submitExamBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!confirm("Submit exam now?")) return;
    submitExam();
  });

  // Submit logic
  function submitExam(){
    if(timerInterval) { clearInterval(timerInterval); timerInterval = null; }

    // Compute score
    const formData = new FormData(examForm);
    let score = 0;
    selectedQuestions.forEach((q, idx) => {
      const answer = formData.get(`q${idx}`);
      if(answer && answer === q.answer) score++;
    });

    // Save score record to localStorage
    const stored = JSON.parse(localStorage.getItem("examScores") || "[]");
    const record = {
      examNum: currentStudent.examNum,
      name: currentStudent.name,
      class: currentStudent.class,
      gender: currentStudent.gender,
      subject: currentSubjectKey,
      score,
      total: selectedQuestions.length,
      timestamp: new Date().toISOString()
    };
    stored.push(record);
    localStorage.setItem("examScores", JSON.stringify(stored));

    // Show result panel + scoreboard
    showResults(record);
  }

  // Build scoreboard for class & subject
  function showResults(record){
    document.getElementById("setupPanel").classList.add("hidden");
    examPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");

    resultSummary.textContent = `${record.name} (${record.examNum}) scored ${record.score} / ${record.total} in ${record.subject}.`;

    buildScoreboard(record.class, record.subject);
  }

  // Build and render scoreboard table (sorted highest to lowest)
  function buildScoreboard(className, subjectKey){
    boardTitle.textContent = `${className} — ${subjectKey}`;
    const stored = JSON.parse(localStorage.getItem("examScores") || "[]");
    const filtered = stored.filter(s => s.class === className && s.subject === subjectKey);
    filtered.sort((a,b) => b.score - a.score || new Date(a.timestamp) - new Date(b.timestamp));

    if(filtered.length === 0){
      scoreboard.innerHTML = `<p class="muted">No scores saved yet for this class & subject.</p>`;
      return;
    }

    const rows = filtered.map((r, idx) => `
      <tr>
        <td>${idx+1}</td>
        <td>${r.name}</td>
        <td>${r.examNum}</td>
        <td>${r.score} / ${r.total}</td>
        <td>${new Date(r.timestamp).toLocaleString()}</td>
      </tr>
    `).join("");

    scoreboard.innerHTML = `
      <table class="score-table">
        <thead>
          <tr><th>#</th><th>Name</th><th>Exam No</th><th>Score</th><th>Date</th></tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  }

  // Download scoreboard as PDF
  downloadPdfBtn.addEventListener("click", ()=>{
    const el = document.getElementById("scoreboardWrap");
    // small options
    html2pdf()
      .set({ margin: 10, filename: `scoreboard_${boardTitle.textContent.replace(/\s+/g,"_")}.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 } })
      .from(el)
      .save();
  });

  // Reset to home
  resetBtn.addEventListener("click", ()=>{
    document.getElementById("setupPanel").classList.remove("hidden");
    examPanel.classList.add("hidden");
    resultPanel.classList.add("hidden");
    studentInfo.classList.add("hidden");
    startExamBtn.disabled = true;
    examNoInput.value = "";
    subjectSelect.value = "";
    currentStudent = null;
    currentSubjectKey = null;
    selectedQuestions = [];
    if(timerInterval){ clearInterval(timerInterval); timerInterval=null;}
  });

  // Expose for debugging if needed
  window.__CBT = { Students, subjectsDatabase, buildScoreboard };
})();