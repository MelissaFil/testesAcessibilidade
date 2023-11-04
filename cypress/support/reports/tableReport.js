const violationReport = []
function tableReport(violations){
    violations.map(function({ id, impact, description, nodes }){
      violationReport.push({id:id, impact:impact, description:description, nodes: nodes.length})
      
    })
   
  }
  function printTableReport(){
    cy.task('table', violationReport)
  }
  module.exports = {
    tableReport,
    printTableReport,
  };