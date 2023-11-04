import'./reports/tableReport'

var cont=0, 
contmoderate=0, 
contserious=0, 
contcritical=0,contNode=0;
const { tableReport, printTableReport } = require('./reports/tableReport');
const { printReport } = require('./reports/printReport');
const { tableReportResume,printTableReportResume } = require('./reports/tableReportResume');

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




//verificar acessibilidade
Cypress.Commands.add('checkLink', (domain, path) => { 
    cy.visit(domain+path)
    cy.injectAxe() 
    cy.checkA11y(null, null, generateReport, true)  
})

//imprimir no terminal tabela com todos os erros encontrado no sistema inteiro e log informando 
//a quantidade de violação de cada tipo de impacto
Cypress.Commands.add('printReport', () => { 
  printReport(cont,contserious,contmoderate,contcritical,contNode)  
  printTableReport()
})
Cypress.Commands.add('printReportResume', () => { 
  printTableReportResume()
})

