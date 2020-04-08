import { After, AfterAll, Before, BeforeAll, HookScenarioResult, setDefaultTimeout } from 'cucumber';
import { THIRTY_SECS_IN_MS } from 'src/../../constants/datetime';

// Framework setup
BeforeAll(function () {
  setDefaultTimeout(THIRTY_SECS_IN_MS);

  console.info('BeforeAll executed!');
});

Before((scenario: HookScenarioResult) => {
  const {
    pickle: { name }
  } = scenario;
  const now = new Date(Date.now()).toLocaleString();

  console.info(`\n${now}.\nStarting Scenario: ${name}`);
});

After(() => {
  console.info('After hook executed!');
});

AfterAll(() => {
  console.info('AfterAll hook executed!');
});
