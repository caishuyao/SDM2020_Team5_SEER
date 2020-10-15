// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

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

const Practices = [
  {value:"", name:"Please select Software Practice"},
  {value:"P1", name:"Unit Testing"},
  {value:"P2", name:"Continuous Integration"},
  {value:"P3", name:"Refactoring"},
  {value:"P4", name:"Test Driven Development"},
  {value:"P5", name:"Continuous Deployment"},
  {value:"P6", name:"Micro Services"},
  {value:"P7", name:"Configuration Management"},
  {value:"P8", name:"Monitoring and Logging"},
  ];

const Claims = {
  "P1":[{value:"C1-1", name:"The effectiveness of the testing practices currently used by software developers is limited"},
        {value:"C1-2", name:"Software developers would benefit from using a wide range of testing practices from software engineering"} ,
        {value:"C1-3", name:"The Unit testing practices that software developers do utilize are often executed poorly"},
        {value:"C1-4", name:"Unit Testing is much more complicated for SE since the correct results are frequently not known"}],
  "P2":[{value:"C2-1", name:"Continuous Integration is not nessery for software development"},
        {value:"C2-2", name:"Software developers would benefit from using a regularly CI"}],
  "P3":[{value:"C3-1", name:"Refactoring is a useful practice to increase software quality"},
        {value:"C3-2", name:"Refactoring is not always possible"}],
  "P4":[{value:"C4-1", name:"Test Driven Development improves code quality"},
        {value:"C4-2", name:"Test Driven Development improves product quality"},
        {value:"C4-3", name:"Test Driven Development improves team confidence"},
        {value:"C4-4", name:"Test Driven Development is not nessery for software development"},
        {value:"C4-5", name:"Software developers would benefit from using Test Driven Development"},
        {value:"C4-6", name:"Test Driven Development also effects the design of the software"},
        {value:"C4-7", name:"Test Driven Development would harm for the software quality"}],
  "P5":[{value:"C5-1", name:"Continuous Deployment is not nessery for software development"},
        {value:"C5-2", name:"Software developers would benefit from using Continous Deployment"}],
  "P6":[{value:"C6-1", name:"Micro Services is not nessery for software development"},
        {value:"C6-2", name:"Software developers would benefit from using Micro Services"},
        {value:"C6-3", name:"Micro Services would make software architecture"}],
  "P7":[{value:"C7-1", name:"Configruation Management is not nessery for software development"},
        {value:"C7-2", name:"Software developers would benefit from using Configruation Management"},
        {value:"C7-3", name:"Configruation Management would make the developers confusing the code they are editing"}],
  "P8":[{value:"C8-1", name:"Monitoring and Logging is not nessery for software development"},
        {value:"C8-2", name:"Software developers would benefit from using Moitoring and Logging"}],
};

const SupportRate = [
      {value:"1", name:"Low"},
      {value:"2", name:"Medium"},
      {value:"3", name:"High"}
];

const sortOption = [
      {value:"1", name:"Order By Published Year - Latest to Oldest"},
      {value:"2", name:"Order By Published Year - Oldest to Latest"},
      {value:"3", name:"Order By Support Rating - High to Low"},
      {value:"4", name:"Order By Support Rating - Low to High"},
]

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  LibDB,
  Practices,
  Claims,
  SupportRate,
  sortOption
};
