# Getting started with Cypress [![](https://badgen.net/badge/Run%20this%20/README/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://runme.dev/api/runme?repository=git%40github.com%3Asaucelabs%2Fvisual-examples.git)

## Prerequisites

- OSX Ventura with Git and Brew
- Linux with bash curl and git
- Windows with NodeJS 18 (untested)
- Sauce Labs Account

## Run the demo

- Install Node.js 18 on Mac:

```sh { name=nodejs-mac }
brew install node@18
```

- Install Node.js 18 + Dependencies on Linux:

```sh { name=nodejs-linux }
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

- Clone the repo:

```sh { name=clone }
git clone https://github.com/saucelabs/visual-examples
cd visual-examples/cypress
```

- install npm dependencies:

```sh { name=npm-install }
npm install
```

- Configure with your Sauce credentials from https://app.saucelabs.com/user-settings and run

```sh { name=set-credentials }
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
# to change the region you are testing in please change the `region` property in the cypress.config.ts file.
```

- Run the test

```sh { name=npm-run }
npm run cypress
```

- Review your screenshots by clicking on the url printed in the test or go to https://app.saucelabs.com/visual/builds.
- Accept all diffs, so they become new baselines.
- Re-run the tests

```sh { name=npm-run-modified }
npm run cypress-modified
```

- Open the test or go to https://app.saucelabs.com/visual/builds to review changes.

## How to add visual testing to your setup

- Add plugin to your Cypress project

```sh
npm install --save @saucelabs/cypress-visual-plugin
```

- Add plugin in the project configuration, at the top of the file:
```ts
import CypressVisualPlugin from '@saucelabs/cypress-visual-plugin';

export default defineConfig({
  e2e: {
    [...]
    setupNodeEvents(on, config) {
      CypressVisualPlugin(on, config);
    },
  },
})
```

- Capture screenshot in one of your tests:

```ts
context('Sauce Demo', () => {
  it('.type() - type into a DOM element', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.screenshot('visual: my-homepage');
  })
});
```

- Configure with your Sauce credentials from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

- Run the test the way you are used to.