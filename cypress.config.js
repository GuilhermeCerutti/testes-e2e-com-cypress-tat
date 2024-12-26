const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 40000,
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
  projectId:'idom4e',
})
