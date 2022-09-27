const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    userName:'flavio',
    password: '123'
  },


  projectId: 'mxc2jw',
  reporter: 'mochawesome',
  reporterOptions: {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "charts": true,
    "reportTitle": "Alura: Automação e2e com Cypress"
  },
  e2e: {
    baseUrl: "https://alura-fotos.herokuapp.com",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      
    },
    
  },
  
})
