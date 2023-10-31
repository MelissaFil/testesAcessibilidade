Cypress.Commands.add('checkLink', (buttonContains, terminalLog) => { 
    if(buttonContains){
        cy.contains('a', buttonContains).click()
    }
    cy.injectAxe() 
    cy.checkA11y(null, null, terminalLog, true)  
})