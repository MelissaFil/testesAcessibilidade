var cont=0;
var contmoderate=0;
var contserious=0;
var contcritical=0;
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} violaç${
      violations.length === 1 ? 'ão de acessibilidade' : 'ões de acessibilidade'
    } ${violations.length === 1 ? 'foi detectada' : 'foram detectadas'} `
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
  contViolation(violations)
}


function contViolation (violation){
  cont+=violation.length;

  violation.map(function(v){
    if(v.impact == 'moderate'){
        contmoderate++
      }else
    if(v.impact == 'serious'){
        contserious++
    }else
    if(v.impact == "critical"){
        contcritical++
      }
  })

  cy.task(
    'log',
    `Um total de ${cont} violações encontradas no sistema `
  )
  cy.task(
    'log',
    `Um total de ${contmoderate} violações moderadas encontradas no sistema `
  )
  cy.task(
    'log',
    `Um total de ${contserious} violações Sérias encontradas no sistema `
  )
  cy.task(
    'log',
    `Um total de ${contcritical} violações Críticas encontradas no sistema `
  )
 
}

Cypress.Commands.add('checkLink', (buttonContains) => { 
    if(buttonContains){
        cy.contains('a', buttonContains).click()
    }
    cy.injectAxe() 
    cy.checkA11y(null, null, terminalLog, true)  
})