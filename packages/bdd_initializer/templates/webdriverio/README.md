# WebdriverIO testing framework

[WebdriverIO](https://webdriver.io/) is configured to use [Cucumber-js](https://github.com/cucumber/cucumber-js) and Typescript.
Features are defined with [Gherkin](https://cucumber.io/docs/gherkin/reference/).

Requirements: `last stable NodeJS lts version (12.x.y)`

## Installation

In the root directory install the package dependencies:
<code>
npm install / yarn install
</code>

If you are going to run your tests in a local environment, the env variable
<code>
BASE_URL
</code>
has to be set as the endpoint where the test it's being performed.

## Execute tests

Once all the dependencies are installed you are allowed to execute the tests in different ways:

- Run whole test suite in headless mode:
  <code>
  yarn test
  </code>
- Run whole test suite in non-headless mode:
  <code>
  yarn run test:debug
  </code>
- Run specific tests defined by custom tags ([cucumber tag expressions](https://cucumber.io/docs/cucumber/api/#tag-expressions)):
  <code>
  yarn test "@feature_file_tag and not @ignore"
  </code>

## CrossBrowser tests

In order to launch tests in CBT, the following environment variables have to be set:

- <code>CBT_USERNAME</code> & <code>CBT_AUTHKEY</code> which can be found in the [CBT account page](https://app.crossbrowsertesting.com/account)
- <code>CBT_ENV</code> has to be set to <code>desktop</code> or <code>mobile</code>.

#### Desktop

- <code>BROWSER</code> & <code>PLATFORM</code> which the combination of them can be found in th [CBT Capabilities Configurator](https://app.crossbrowsertesting.com/selenium/run)

If any browser or platform are not provide Chrome with Windows 10 is the default capability.

#### Mobile

Only default mode has been set.

- iPhone 11, iOS 13.1.3, Safari browser
- Samsung Galaxy S10, android 10, Chrome browser
- iPad Pro, iOS 11, Safari browser

Any other capability can be generated using the [CBT Capabilities Configurator](https://app.crossbrowsertesting.com/selenium/run)

Once all the env variables are set you are allowed to execute the tests in different ways:

- Run whole test suite: <code>yarn run cbtTest</code>
- Run specific tests defined by custom tags ([cucumber tag expressions](https://cucumber.io/docs/cucumber/api/#tag-expressions)):
  <code>yarn run cbtTest "@feature_file_tag and not @ignore"</code>

## Reports

After executing the tests run the following command to display the results
<code>
yarn run report
</code>
