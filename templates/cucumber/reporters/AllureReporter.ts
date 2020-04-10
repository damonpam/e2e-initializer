import { CucumberJSAllureFormatter } from 'allure-cucumberjs/dist';
import { AllureRuntime } from 'allure-js-commons/dist';

export default class AllureReporter extends CucumberJSAllureFormatter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(options: any) {
    super(options, new AllureRuntime({ resultsDir: './_results_/raw' }), {
      labels: {
        epic: [/@feature:(.*)/],
        issue: [/@bug_(.*)/]
      }
    });
  }
}
