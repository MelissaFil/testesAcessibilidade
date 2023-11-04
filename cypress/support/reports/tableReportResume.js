const violationReportResume = [];

function tableReportResume(violations){
    var exist=false;
    violations.map(function({ id, impact, description, nodes }){
      //verificar se já foi encontrado um erro do tipo, caso sim, somar os nodes
      violationReportResume.map(function(report){
        if(report.id == id){
          exist = true
          report.nodes+=nodes.length
        }
      })
      if(!exist){
        violationReportResume.push({id:id, impact:impact, description:description, nodes: nodes.length})
      }
      
    })
  }
  function printTableReportResume(){
    cy.task('table', violationReportResume)
  }
  module.exports={
    tableReportResume,
    printTableReportResume
  }