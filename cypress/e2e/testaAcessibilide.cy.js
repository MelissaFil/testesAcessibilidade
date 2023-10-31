var cont=0;
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
 
  cy.task(
    'log',
    `Um total de ${cont} violações encontradas no sistema `
  )
}

describe('testeAcessibilidade ', () => {
  beforeEach(() => {  
      cy.visit('https://www2.recife.pe.gov.br/')
 })

  it('verifica violações em início', () => {
    cy.checkLink('', terminalLog)
   
  })

  it('verifica violação em cidadão',() => {
    cy.checkLink('Cidadão',terminalLog)
    
  })
  it('verifica violação em turista',() => {
    cy.checkLink('Turista',terminalLog)
    
  })
  it('verifica violação em empresas',() => {
    cy.checkLink('Empresas',terminalLog)
    
  })

})

