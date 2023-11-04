
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

  it('Gerar tabela com todas as violações encontradas',() => {
    cy.printTableReport()
  })
  it('Gerar tabela com o resumo das violações encontradas',() => {
    cy.printReportResume()
  })
  it('Gerar log com o resumo das violações encontradas',() => {
    cy.printReport()
  })
})

