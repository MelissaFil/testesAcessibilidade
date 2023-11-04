
describe('testeAcessibilidadeConectaRecife ', () => {
    const visit = 'https://www.olinda.pe.gov.br/';

    it('verifica violações em início', () => {
      cy.checkLink(visit,'')
    })
    it('verifica violações em Serviços', () => {
      cy.checkLink(visit, 'servicos')
    })
    it('verifica violações em Institucional', () => {
      cy.checkLink(visit,'secretarias-e-orgaos')
    })
    it('Imprimir relatório violações',() => {
      cy.printReport()
    })
})