
describe('testeAcessibilidadeConectaRecife ', () => {
    beforeEach(() => {  
        cy.visit('https://conecta.recife.pe.gov.br/')
   })
  
    it('verifica violações em início', () => {
      cy.checkLink('')
    })
    it('verifica violações em Institucional', () => {
      cy.checkLink('Institucional')
    })
    it('verifica violações em Ouvidoria', () => {
      cy.checkLink('Ouvidoria')
    })
})