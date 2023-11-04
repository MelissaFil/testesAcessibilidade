
describe('testeAcessibilidadePrefeitura ', () => {
  const domain = 'https://www2.recife.pe.gov.br/'
  
  it('verifica violações em início', () => {
    cy.checkLink(domain,'')
  })
  it('verifica violação em cidadão',() => {
    cy.checkLink(domain, 'servicos/cidadao')
  })
  it('verifica violação em turista',() => {
    cy.checkLink(domain, 'servicos/turista')
  })
  it('verifica violação em empresas',() => {
    cy.checkLink(domain, 'servico/empresa')
  })

  it('Gerar relatório de contagem de violações encontradas',() => {
    cy.printReport()
  })
  it('Gerar relatório de resumo de tipos de violações encontradas',() => {
    cy.printReportResume()
  })
})

