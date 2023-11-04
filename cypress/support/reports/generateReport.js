const { tableReport } = require('./tableReport');
const { tableReportResume } = require('./tableReportResume');
const { printReport } = require('./printReport');

var cont=0, 
contmoderate=0, 
contserious=0, 
contcritical=0,contNode=0;
function generateReport (violation){
    cont+=violation.length;
  
    violation.map(function(v){
      switch(v.impact) {
          case 'moderate':
              contmoderate++
              contNode+= v.nodes.length
              break;
          case 'serious':
              contserious++
              contNode+= v.nodes.length
              break;
          case "critical":
              contcritical++
              contNode+= v.nodes.length
              break;      }
    })
    tableReport(violation)
    tableReportResume(violation)
  }
  function generatePrintReport(){
    printReport(cont,contserious,contmoderate,contcritical,contNode)
  }
  module.exports={
    generateReport,
    generatePrintReport
  }