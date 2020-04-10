/* eslint-disable no-console */
import { After, AfterAll, Before, BeforeAll, HookScenarioResult, setDefaultTimeout } from 'cucumber';

import { ensureTmpDirExists } from './helpers/ensureTmpDirExists';

// Framework setup
BeforeAll(function() {
  const THIRTY_SECONDS = 30 * 1000;
  setDefaultTimeout(THIRTY_SECONDS);

  ensureTmpDirExists();
  console.log('BeforeAll executed!');
});

Before((scenario: HookScenarioResult) => {
  const {
    pickle: { name }
  } = scenario;
  const now = new Date(Date.now()).toLocaleString();

  console.log(`\n${now}.\nStarting Scenario: ${name}`);
});

After(() => {
  console.log('After hook executed!');
});

AfterAll(() => {
  console.log('AfterAll hook executed!');
});
