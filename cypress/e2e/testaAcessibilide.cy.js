
describe('testeAcessibilidade ', () => {
  beforeEach(() => {  
      cy.visit('https://www2.recife.pe.gov.br/')
 })

  it('verifica violações em início', () => {
    cy.checkLink('')
   
  })

  it('verifica violação em cidadão',() => {
    cy.checkLink('Cidadão')
    
  })
  it('verifica violação em turista',() => {
    cy.checkLink('Turista')
    
  })
  it('verifica violação em empresas',() => {
    cy.checkLink('Empresas')
    
  })

})

