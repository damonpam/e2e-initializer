# WebdriverIO testing framework

[WebdriverIO](https://webdriver.io/) is configured to use [Cucumber-js](https://github.com/cucumber/cucumber-js) and Typescript.
Features are defined with [Gherkin](https://cucumber.io/docs/gherkin/reference/).

Requirements: `last stable NodeJS version (13.x.y)`

## Installation

In the root directory install the package dependencies:
<code>
npm install / yarn install
</code>

## Execute tests

Once all the dependencies are installed you are allowed to execute the tests in different ways:

- Run whole test suite in headless mode:
  <code>
  npm test
  </code>
- Run whole test suite in non-headless mode:
  <code>
  npm run test:debug
  </code>
- Run specific tests defined by custom tags ([cucumber tag expressions](https://cucumber.io/docs/cucumber/api/#tag-expressions)):
  <code>
  npm test "@feature_file_tag and not @ignore"
  </code>

## Reports

After executing the tests run the following command to display the results
<code>
npm run report
</code>
