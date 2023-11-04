const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        table(message) {
          console.table(message)
    
          return null
        }
      })
    },
 
  },
});
