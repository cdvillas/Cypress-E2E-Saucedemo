const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000, // Aumenta a 2 minutos (120,000 ms)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
