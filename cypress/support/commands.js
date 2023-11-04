var cont=0, 
contmoderate=0, 
contserious=0, 
contcritical=0;
const violationReport = [{ id:"",impact:"",description:"",nodes:0 }];
const violationReportResume = [{ id:"",impact:"",description:"",nodes:0 }];
function generateReport (violation){
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
  tableReport(violation)
  tableReportResume(violation)
}
function printReport (){
  cy.task('log', `Um total de ${cont} violações encontradas no sistema onde:`+
    `\n${contserious} violações são Sérias` + 
    `\n ${contmoderate} violações são moderadas` +
    `\n ${contcritical} violações são Críticas `
  ) 
  cy.task('table', violationReport)
}
function tableDescription(violations) {
  
   const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )
  cy.task('table', violationData)
}

function tableReport(violations){
  violations.map(function({ id, impact, description, nodes }){
    violationReport.push({id:id, impact:impact, description:description, nodes: nodes.length})
    
  })
 
}

function tableReportResume(violations){
  var exist=false;
  violations.map(function({ id, impact, description, nodes }){
    //verificar se já foi encontrado um erro do tipo
    violationReportResume.map(function(report){
      if(report.id == id){
        exist = true
      }
    })
    if(!exist){
      violationReportResume.push({id:id, impact:impact, description:description, nodes: nodes.length})
    }
    
  })
}

//verificar acessibilidade
Cypress.Commands.add('checkLink', (domain, path) => { 
    cy.visit(domain+path)
    cy.injectAxe() 
    cy.checkA11y(null, null, generateReport, true)  
})

//imprimir no terminal tabela com todos os erros 
//encontrado no sistema inteiro e log informando 
//a quantidade de violação de cada tipo de impacto
Cypress.Commands.add('printReport', () => { 
  printReport()  
})
Cypress.Commands.add('printReportResume', () => { 
  cy.task('table', violationReportResume)
})
Cypress.Commands.add('tableDescription', (violation) => { 
  tableDescription(violation)
})
