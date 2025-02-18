import { defineConfig } from 'cypress';
import { CypressSauceVisual } from '@saucelabs/cypress-visual-plugin';

export default defineConfig({
  e2e: {
    saucelabs: {
      buildName: 'SauceDemo - Cypress',
      region: 'us-west-1',
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: './cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      CypressSauceVisual.register(on, config);
    },
  },
})
