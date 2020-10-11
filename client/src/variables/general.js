// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];

const backend = {host:"http://localhost:8080/seer/submit"};

const LibDB = [
   {value:'ACM', name:'ACM Digital Library'},
   {value:'AIS', name:'AIS eLibrary'},
   {value:'BSO', name:'British Standars Online'},
   {value:'EBSCO', name:'Business Source Complete(EBSCO)'},
   {value:'EF', name:'Emerald Fulltext'},
   {value:'Gartner', name:'Gartner'},
   {value:'Google', name:'Google Scholar'},
   {value:'IEEE', name:'IEEE Xplore'},
   {value:'IGI', name:'IGI Global\'s Database Search'},
   {value:'LNCS', name:'Lecture Notes in Computer Science'},
   {value:'MSciN', name:'MathSciNet'},
   {value:'SRM', name:'SAGE Research Mehods'},
   {value:'SD', name:'ScienceDirect'},
   {value:'Scopus', name:'Scopus'},
   {value:'SIAM', name:'SIAM Journals'},
   {value:'SL', name:'SpringerLink'},
   {value:'StdNZ', name:'Standards New Zealand'},
   {value:'StaNZ', name:'Statistics New Zealand'},
   {value:'WoS', name:'Web of Science '},
];
 
module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server,
  backend,
  LibDB,
};
