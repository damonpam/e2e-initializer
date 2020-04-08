import { AllureRuntime, CucumberJSAllureFormatter } from 'allure-cucumberjs';
import { REPORT_DIR } from 'src/../../constants/directories';

export default class AllureReporter extends CucumberJSAllureFormatter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
  constructor(options: any) {
    super(options, new AllureRuntime({ resultsDir: `${REPORT_DIR}/allure-results` }), {
      labels: {
        epic: [/@epic=(.*)/],
        issue: [/@issue=(.*)/]
      }
    });
  }
}
