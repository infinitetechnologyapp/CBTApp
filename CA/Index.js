/* Index.js - lightweight bootstrap for the UI.
   Keeps index.html minimal and wires DOM elements to App.js functions.
*/
(function() {
  // expose a tiny helper to the global scope for App to pick up
  window.CBT_UI = {
    selectors: {
      examNum: document.getElementById("exam-num"),
      classSelect: document.getElementById("class-select"),
      subjectSelect: document.getElementById("subject-select"),
      startBtn: document.getElementById("start-btn"),
      clearScoresBtn: document.getElementById("clear-scores-btn"),
      studentDetails: document.getElementById("student-details"),
      messages: document.getElementById("messages"),
      
      startScreen: document.getElementById("start-screen"),
      examScreen: document.getElementById("exam-screen"),
      resultScreen: document.getElementById("result-screen"),
      
      examSubject: document.getElementById("exam-subject"),
      examStudent: document.getElementById("exam-student"),
      timerEl: document.getElementById("timer"),
      questionArea: document.getElementById("question-area"),
      prevBtn: document.getElementById("prev-btn"),
      nextBtn: document.getElementById("next-btn"),
      submitBtn: document.getElementById("submit-btn"),
      progress: document.getElementById("progress"),
      
      resultSummary: document.getElementById("result-summary"),
      ranking: document.getElementById("ranking"),
      downloadBtn: document.getElementById("download-btn"),
      anotherBtn: document.getElementById("another-btn"),
      studentsdataBtn: document.getElementById("check-data"),
     
    }
  };
})();