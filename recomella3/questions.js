/* 
  Each subject follows the exact format you requested:
  Const <SubjectName> = [
    { id, question, options: {A,B,C,D}, answer }
  ]
  I also include an optional 'classes' metadata array (e.g. ["SS1"]) so the runtime can pick questions for the student's class.
*/


/* Chemistry */
const Chemistry = [
  { id: 1, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 2, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 3, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 4, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 7, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 8, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 11, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 12, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 13, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 14, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 17, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 18, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 21, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 22, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 23, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 24, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 25, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 26, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 27, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 28, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 29, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 30, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] }
  
];


/* Computer */
const Computer = [
  { id: 1, question: "Which device is the brain of the computer?", options: { A: "Keyboard", B: "CPU", C: "Monitor", D: "Mouse" }, answer: "B", classes: ["SS3"] },
  { id: 2, question: "Which of the following is an input device?", options: { A: "Printer", B: "Monitor", C: "Scanner", D: "Speaker" }, answer: "C", classes: ["SS3"] },
  { id: 3, question: "Which is a storage device?", options: { A: "Flash Drive", B: "Keyboard", C: "Webcam", D: "Mouse" }, answer: "A", classes: ["SS3"] },
  { id: 4, question: "CPU stands for?", options: { A: "Central Processing Unit", B: "Central Program Unit", C: "Control Power Unit", D: "Central Print Unit" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Which is NOT a type of software?", options: { A: "System Software", B: "Application Software", C: "Utility Software", D: "Hardware Software" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "Key used to delete characters?", options: { A: "Shift", B: "Enter", C: "Backspace", D: "Tab" }, answer: "C", classes: ["SS3"] },
  { id: 7, question: "Device that displays computer output?", options: { A: "Monitor", B: "Mouse", C: "Keyboard", D: "Scanner" }, answer: "A", classes: ["SS3"] },
  { id: 8, question: "Physical parts of the computer are called?", options: { A: "Hardware", B: "Software", C: "Firmware", D: "Data" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "Which of these is an operating system?", options: { A: "Excel", B: "PowerPoint", C: "Windows", D: "Chrome" }, answer: "C", classes: ["SS3"] },
  { id: 10, question: "Software for typing documents is called?", options: { A: "Word Processor", B: "Paint", C: "Calculator", D: "Excel" }, answer: "A", classes: ["SS3"] },
  { id: 11, question: "Which device is the brain of the computer?", options: { A: "Keyboard", B: "CPU", C: "Monitor", D: "Mouse" }, answer: "B", classes: ["SS3"] },
  { id: 12, question: "Which of the following is an input device?", options: { A: "Printer", B: "Monitor", C: "Scanner", D: "Speaker" }, answer: "C", classes: ["SS3"] },
  { id: 13, question: "Which is a storage device?", options: { A: "Flash Drive", B: "Keyboard", C: "Webcam", D: "Mouse" }, answer: "A", classes: ["SS3"] },
  { id: 14, question: "CPU stands for?", options: { A: "Central Processing Unit", B: "Central Program Unit", C: "Control Power Unit", D: "Central Print Unit" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Which is NOT a type of software?", options: { A: "System Software", B: "Application Software", C: "Utility Software", D: "Hardware Software" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "Key used to delete characters?", options: { A: "Shift", B: "Enter", C: "Backspace", D: "Tab" }, answer: "C", classes: ["SS3"] },
  { id: 17, question: "Device that displays computer output?", options: { A: "Monitor", B: "Mouse", C: "Keyboard", D: "Scanner" }, answer: "A", classes: ["SS3"] },
  { id: 18, question: "Physical parts of the computer are called?", options: { A: "Hardware", B: "Software", C: "Firmware", D: "Data" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "Which of these is an operating system?", options: { A: "Excel", B: "PowerPoint", C: "Windows", D: "Chrome" }, answer: "C", classes: ["SS3"] },
  { id: 20, question: "Software for typing documents is called?", options: { A: "Word Processor", B: "Paint", C: "Calculator", D: "Excel" }, answer: "A", classes: ["SS3"] }
  
];


/* Data Processing */
const DataProcessing = [
  { id: 1, question: "Processed data is known as?", options: { A: "Facts", B: "Information", C: "Input", D: "Files" }, answer: "B", classes: ["SS3"] },
  { id: 2, question: "Which of these is a type of data?", options: { A: "Numeric", B: "Cartridge", C: "Soft copy", D: "Hard copy" }, answer: "A", classes: ["SS3"] },
  { id: 3, question: "Arranging data in order is called?", options: { A: "Sorting", B: "Typing", C: "Filtering", D: "Copying" }, answer: "A", classes: ["SS3"] },
  { id: 4, question: "Device used to enter data?", options: { A: "Keyboard", B: "Printer", C: "Speaker", D: "Monitor" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Which is a storage device?", options: { A: "CD-ROM", B: "Mouse", C: "Joystick", D: "Scanner" }, answer: "A", classes: ["SS3"] },
  { id: 6, question: "Meaning of ICT?", options: { A: "Information and Communication Technology", B: "Interconnected Computer Tools", C: "Internet Communication Transfer", D: "Interpersonal Communication Techniques" }, answer: "A", classes: ["SS3"] },
  { id: 7, question: "Raw facts are called?", options: { A: "Data", B: "Information", C: "Knowledge", D: "Files" }, answer: "A", classes: ["SS3"] },
  { id: 8, question: "Which is NOT an output device?", options: { A: "Printer", B: "Monitor", C: "Scanner", D: "Speaker" }, answer: "C", classes: ["SS3"] },
  { id: 9, question: "Which memory stores data permanently?", options: { A: "RAM", B: "ROM", C: "Cache", D: "Buffer" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "The full meaning of UPS is?", options: { A: "Universal Power System", B: "Uninterruptible Power Supply", C: "Unit Power Source", D: "Unlimited Power System" }, answer: "B", classes: ["SS3"] },
  { id: 11, question: "Processed data is known as?", options: { A: "Facts", B: "Information", C: "Input", D: "Files" }, answer: "B", classes: ["SS3"] },
  { id: 12, question: "Which of these is a type of data?", options: { A: "Numeric", B: "Cartridge", C: "Soft copy", D: "Hard copy" }, answer: "A", classes: ["SS3"] },
  { id: 13, question: "Arranging data in order is called?", options: { A: "Sorting", B: "Typing", C: "Filtering", D: "Copying" }, answer: "A", classes: ["SS3"] },
  { id: 14, question: "Device used to enter data?", options: { A: "Keyboard", B: "Printer", C: "Speaker", D: "Monitor" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Which is a storage device?", options: { A: "CD-ROM", B: "Mouse", C: "Joystick", D: "Scanner" }, answer: "A", classes: ["SS3"] },
  { id: 16, question: "Meaning of ICT?", options: { A: "Information and Communication Technology", B: "Interconnected Computer Tools", C: "Internet Communication Transfer", D: "Interpersonal Communication Techniques" }, answer: "A", classes: ["SS3"] },
  { id: 17, question: "Raw facts are called?", options: { A: "Data", B: "Information", C: "Knowledge", D: "Files" }, answer: "A", classes: ["SS3"] },
  { id: 18, question: "Which is NOT an output device?", options: { A: "Printer", B: "Monitor", C: "Scanner", D: "Speaker" }, answer: "C", classes: ["SS3"] },
  { id: 19, question: "Which memory stores data permanently?", options: { A: "RAM", B: "ROM", C: "Cache", D: "Buffer" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "The full meaning of UPS is?", options: { A: "Universal Power System", B: "Uninterruptible Power Supply", C: "Unit Power Source", D: "Unlimited Power System" }, answer: "B", classes: ["SS3"] }
  
];


/* Mathematics */
const Mathematics = [
  { id: 1, question: "Mathematics is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 2, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 3, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 4, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 7, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 8, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 11, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 12, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 13, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 14, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 17, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 18, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 21, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 22, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 23, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 24, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 25, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 26, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 27, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 28, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 29, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 30, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] }
  
];


/* English Language */
const EnglishLanguage = [
  { id: 1, question: "EnglishLanguages the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 2, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 3, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 4, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 7, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 8, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 11, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 12, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 13, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 14, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 17, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 18, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 21, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 22, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 23, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 24, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 25, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 26, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 27, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 28, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 29, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 30, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] }
  
];


/* Biology */
const Biology = [
  { id: 1, question: "Biology is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 2, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 3, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 4, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 7, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 8, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 11, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 12, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 13, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 14, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 17, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 18, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 21, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 22, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 23, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 24, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 25, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 26, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 27, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 28, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 29, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 30, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] }
  
];


/* Physics */
const Physics = [
  { id: 1, question: "Physics is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 2, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 3, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 4, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 7, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 8, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 11, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 12, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 13, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 14, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 17, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 18, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 21, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 22, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 23, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 24, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 25, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 26, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 27, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 28, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 29, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 30, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] }
  
];


/* Geography */
const Geography = [
  { id: 1, question: "Geography is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 2, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 3, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 4, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 7, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 8, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 11, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 12, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 13, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 14, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 17, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 18, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] }
  
];


/* Economics */
const Economics = [
  { id: 1, question: "Economics is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 2, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 3, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 4, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 5, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 6, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 7, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 8, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 9, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 10, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] },
  { id: 11, question: "What is the smallest particle of an element?", options: { A: "Atom", B: "Molecule", C: "Ion", D: "Proton" }, answer: "A", classes: ["SS3"] },
  { id: 12, question: "Which of these is NOT a state of matter?", options: { A: "Solid", B: "Liquid", C: "Gas", D: "Foam" }, answer: "D", classes: ["SS3"] },
  { id: 13, question: "Which particle has a positive charge?", options: { A: "Electron", B: "Neutron", C: "Proton", D: "Ion" }, answer: "C", classes: ["SS3"] },
  { id: 14, question: "Instrument used to measure temperature?", options: { A: "Thermometer", B: "Barometer", C: "Ammeter", D: "Hygrometer" }, answer: "A", classes: ["SS3"] },
  { id: 15, question: "Method used to separate salt from water?", options: { A: "Filtration", B: "Crystallization", C: "Sublimation", D: "Evaporation" }, answer: "D", classes: ["SS3"] },
  { id: 16, question: "The chemical symbol 'O' represents?", options: { A: "Gold", B: "Oxygen", C: "Osmium", D: "Oxide" }, answer: "B", classes: ["SS3"] },
  { id: 17, question: "Gas used by plants during photosynthesis?", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon dioxide", D: "Hydrogen" }, answer: "C", classes: ["SS3"] },
  { id: 18, question: "Which is a noble gas?", options: { A: "Helium", B: "Carbon", C: "Chlorine", D: "Nitrogen" }, answer: "A", classes: ["SS3"] },
  { id: 19, question: "The number of protons in an atom is the _____.", options: { A: "Mass number", B: "Atomic number", C: "Valency", D: "Charge" }, answer: "B", classes: ["SS3"] },
  { id: 20, question: "Change from solid to gas is called?", options: { A: "Condensation", B: "Evaporation", C: "Melting", D: "Sublimation" }, answer: "D", classes: ["SS3"] }
  
];

/* All subjects database (lookup) */
const subjectsDatabase = { Chemistry, Computer, DataProcessing, Mathematics, EnglishLanguage, Biology, Physics, Geography, Economics };