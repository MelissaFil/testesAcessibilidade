const { generateReport } = require('./reports/generateReport');
const { printTableReport } = require('./reports/tableReport');
const { generatePrintReport } = require('./reports/generateReport');
const { printTableReportResume } = require('./reports/tableReportResume');


Cypress.Commands.add('checkLink', (domain, path) => { 
    cy.visit(domain+path)
    cy.injectAxe() 
    cy.checkA11y(null, null, generateReport, true)  
})


Cypress.Commands.add('printTableReport', () => { 
  printTableReport()
})

Cypress.Commands.add('printReportResume', () => { 
  printTableReportResume()
})
Cypress.Commands.add('printReport', () => { 
  generatePrintReport()
})


