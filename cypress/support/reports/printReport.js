function printReport (cont,contserious,contmoderate,contcritical,contNode){
  cy.log( `Um total de ${cont} violações encontradas no sistema onde:`+    
    `\n${contserious} violações são Sérias` + 
    `\n ${contmoderate} violações são moderadas` +
    `\n ${contcritical} violações são Críticas `+
    `\n Ao todo, ${contNode  } nós foram afetados`
  ) 
  
}
module.exports = {
    printReport,
  };