// Compulsory subjects for every student
const COMPULSORY_SUBJECTS = ["Mathematics", "English Language", "Civic Education"];

// All available subjects in the system
const ALL_SUBJECTS = [
  "Mathematics",
  "English Language",
  "Civic Education",
  "Chemistry",
  "Biology",
  "Physics",
  "Geography",
  "Computer Science",
  "Data Processing",
  "Economics",
  "Literature in English",
  "Agric Science",
  "Financial Accounting",
  "Marketing",
  "Government",
  "CRS",
  "Commerce"
  // Add more subjects here as needed
];

// Students data
window.studentsSS3 = [
  { examNum: "SS3091", name: "Edanuko Sarima Ununuma", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3092", name: "Siaka Prisca Jaka", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3093", name: "Nwele Divine Favour", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3094", name: "Imokhai Anne", class: "SS3", gender: "Female", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Literature in English"] },
  
  { examNum: "SS3095", name: "Ofue Christiana", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3096", name: "Emmanuel Leslie", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3097", name: "Esther Mfereke", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3098", name: "Favour Akpan", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3099", name: "Onwachukwe Chiamaka", class: "SS3", gender: "Female", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Literature in English"] },
  
  { examNum: "SS3100", name: "Yusuf Eliphaz", class: "SS3", gender: "Male", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Literature in English"] },
  
  { examNum: "SS3101", name: "Emmanuel Vincent", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3102", name: "Favour Igwe", class: "SS3", gender: "Female", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Literature in English"] },
  
  { examNum: "SS3103", name: "Faithfulness Igwe", class: "SS3", gender: "Female", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Literature in English"] },
  
  { examNum: "SS3104", name: "Victoria Francis", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3105", name: "Friday Success", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3106", name: "Onuma Chibuike", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3107", name: "Oluka Patricia", class: "SS3", gender: "Female", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Financial Accounting"] },
  
  { examNum: "SS3108", name: "Aniedi Emmanuel", class: "SS3", gender: "Male", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Commerce"] },
  
  { examNum: "SS3109", name: "Praise Richard", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3110", name: "Ekwilo Janevivian", class: "SS3", gender: "Female", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3111", name: "Emmanuel Simon", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3112", name: "Marvelous Perculia", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3113", name: "Nsikak God's gift", class: "SS3", gender: "Male", subject: ["CRS", "Marketing", "Biology", "Economics", "Government", "Commerce"] },
  
  { examNum: "SS3114", name: "Edward Makuochukwu", class: "SS3", gender: "Male", subject: ["Chemistry", "Physics", "Biology", "Computer Science", "Geography", "Data Processing"] },
  
  { examNum: "SS3Admin", name: "Sir Patrick Ncha", class: "SS3", gender: "Male", subject: "all" }
  
  
  
  /* Add more students as needed */
];
/* UTILITY FUNCTIONS */

/**
 * Get full list of subjects a student is offering
 * Combines compulsory + extra or all subjects
 */
function getStudentSubjects(student) {
  if (student.subject === "all") {
    return [...ALL_SUBJECTS];
  }
  if (Array.isArray(student.subject)) {
    return Array.from(new Set([...COMPULSORY_SUBJECTS, ...student.subject]));
  }
  // fallback: only compulsory
  return [...COMPULSORY_SUBJECTS];
}

/**
 * Check if student is offering a particular subject
 */
function isStudentOfferingSubject(student, subject) {
  const list = getStudentSubjects(student);
  return list.includes(subject);
}