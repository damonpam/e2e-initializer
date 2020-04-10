# Cucumber-js

[Cucumber-js](https://github.com/cucumber/cucumber-js) using Typescript.
Features are defined with [Gherkin](https://cucumber.io/docs/gherkin/reference/).

Requirements: `latest NodeJS stable version (13.x.y)`

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
- Run specific tests defined by custom tags ([cucumber tag expressions](https://cucumber.io/docs/cucumber/api/#tag-expressions)):
  <code>
  npm test -- --tags "@scenario_tag"
  </code>

## Reports

After executing the tests run the following command to display the results
<code>
npm run report
</code>
