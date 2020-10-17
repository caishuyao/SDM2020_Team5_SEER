// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

const LibDB = new Map([
   ["", "Please select Database"],
   ['ACM', 'ACM Digital Library'],
   ['AIS', 'AIS eLibrary'],
   ['BSO', 'British Standars Online'],
   ['EBSCO', 'Business Source Complete(EBSCO)'],
   ['EF', 'Emerald Fulltext'],
   ['Gartner', 'Gartner'],
   ['Google', 'Google Scholar'],
   ['IEEE', 'IEEE Xplore'],
   ['IGI', 'IGI Global\'s Database Search'],
   ['LNCS', 'Lecture Notes in Computer Science'],
   ['MSciN', 'MathSciNet'],
   ['SRM', 'SAGE Research Mehods'],
   ['SD', 'ScienceDirect'],
   ['Scopus', 'Scopus'],
   ['SIAM', 'SIAM Journals'],
   ['SL', 'SpringerLink'],
   ['StdNZ', 'Standards New Zealand'],
   ['StaNZ', 'Statistics New Zealand'],
   ['WoS', 'Web of Science '],
]);

const Practices = new Map([["", "Please select Software Practice"],
  ["P1", "Unit Testing"],
  ["P2", "Continuous Integration"],
  ["P3", "Refactoring"],
  ["P4", "Test Driven Development"],
  ["P5", "Continuous Deployment"],
  ["P6", "Micro Services"],
  ["P7", "Configuration Management"],
  ["P8", "Monitoring and Logging"],
]);

const Claims = {
  "P1":new Map([["C1-1", "The effectiveness of the testing practices currently used by software developers is limited"],
                ["C1-2", "Software developers would benefit from using a wide range of testing practices from software engineering"] ,
                ["C1-3", "The Unit testing practices that software developers do utilize are often executed poorly"],
                ["C1-4", "Unit Testing is much more complicated for SE since the correct results are frequently not known"]]),
  "P2":new Map([["C2-1", "Continuous Integration is not nessery for software development"],
                ["C2-2", "Software developers would benefit from using a regularly CI"]]),
  "P3":new Map([["C3-1", "Refactoring is a useful practice to increase software quality"],
                ["C3-2", "Refactoring is not always possible"]]),
  "P4":new Map([["C4-1", "Test Driven Development improves code quality"],
                ["C4-2", "Test Driven Development improves product quality"],
                ["C4-3", "Test Driven Development improves team confidence"],
                ["C4-4", "Test Driven Development is not nessery for software development"],
                ["C4-5", "Software developers would benefit from using Test Driven Development"],
                ["C4-6", "Test Driven Development also effects the design of the software"],
                ["C4-7", "Test Driven Development would harm for the software quality"]]),
  "P5":new Map([["C5-1", "Continuous Deployment is not nessery for software development"],
                ["C5-2", "Software developers would benefit from using Continous Deployment"]]),
  "P6":new Map([["C6-1", "Micro Services is not nessery for software development"],
                ["C6-2", "Software developers would benefit from using Micro Services"],
                ["C6-3", "Micro Services would make software architecture"]]),
  "P7":new Map([["C7-1", "Configruation Management is not nessery for software development"],
                ["C7-2", "Software developers would benefit from using Configruation Management"],
                ["C7-3", "Configruation Management would make the developers confusing the code they are editing"]]),
  "P8":new Map([["C8-1", "Monitoring and Logging is not nessery for software development"],
                ["C8-2", "Software developers would benefit from using Moitoring and Logging"]]),
};

const SupportRate = new Map([
      ["1", "Low"],
      ["2", "Medium"],
      ["3", "High"]
]);

const sortOption = new Map([
      ["0", "Original Order"],
      ["1", "Published Year - Latest to Oldest"],
      ["2", "Published Year - Oldest to Latest"],
      ["3", "Support Rating - High to Low"],
      ["4", "Support Rating - Low to High"],
]);

module.exports = {
  // these 5 are used to create the tasks lists in TasksCard - Dashboard view
  LibDB,
  Practices,
  Claims,
  SupportRate,
  sortOption
};
