const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-multi-reporters',
  failOnStatusCode: false,
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://uppy--morph-analysis.netlify.app/',
    LIVE_URL: 'https://morph-analysis.dicta.org.il/',
    TOOL_TESTS: false,
    REQUESTS_TESTS: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://uppy--morph-analysis.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
