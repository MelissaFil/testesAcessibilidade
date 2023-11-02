var cont=0, contmoderate=0, contserious=0, contcritical=0;
function contViolation (violation){
  cont+=violation.length;

  violation.map(function(v){
    switch(v.impact) {
        case 'moderate':
            contmoderate++
            break;
        case 'serious':
            contserious++
            break;
        case "critical":
            contcritical++
            break;      }
  })
  
}
function logContViotalions (){
  cy.task('log', `Um total de ${cont} violações encontradas no sistema onde:`+
    `\n${contserious} violações são Sérias` + 
    `\n ${contmoderate} violações são moderadas` +
    `\n ${contcritical} violações são Críticas `
  ) 
}
function tableDescription (violation){
  
}
function linkContains (linkText){
  if(linkText){
    cy.contains('a', linkText).click()
  }
}
Cypress.Commands.add('checkLink', (linkText) => { 
    
  linkContains(linkText)
    cy.injectAxe() 
    cy.checkA11y(null, null, contViolation, true)  
})
Cypress.Commands.add('logContViotalions', () => { 
  logContViotalions()  
})