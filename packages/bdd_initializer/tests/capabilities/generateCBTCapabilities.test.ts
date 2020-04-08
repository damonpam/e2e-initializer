/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */

const {
  generateCBTCapabilities
} = require('../../templates/webdriverio/config/wdio/cbt/capabilities/generateCBTCapabilities');
const {
  defaultDesktopCapability,
  defaultMobileCapabilities
} = require('../../templates/webdriverio/config/wdio/cbt/capabilities/defaultCapabilities');
const {
  EmptyCBTEnvError
} = require('../../templates/webdriverio/config/wdio/cbt/capabilities/errors/environment/EmptyCBTEnvError');
const {
  WrongCBTEnvError
} = require('../../templates/webdriverio/config/wdio/cbt/capabilities/errors/environment/WrongCBTEnvError');

describe('Generate CrossBrowser Capabilities', () => {
  const OLD_ENV = process.env;

  const desktopCapabilitiesMultiplatform = [
    {
      browserName: 'chrome',
      name: 'Windows 10 - chrome',
      platform: `Windows 10`,
      record_video: 'true'
    },
    {
      browserName: 'chrome',
      name: 'Windows 8 - chrome',
      platform: `Windows 8`,
      record_video: 'true'
    }
  ];

  const desktopCapabilitiesChrW8 = [
    {
      browserName: 'chrome',
      name: 'Windows 8 - chrome',
      platform: `Windows 8`,
      record_video: 'true'
    }
  ];

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('generate default desktop capabilities', () => {
    process.env.CBT_ENV = 'desktop';
    process.env.BROWSER = undefined;
    const capabilities = generateCBTCapabilities();

    expect(capabilities).toEqual(defaultDesktopCapability);
  });

  it('generate default mobile capabilities', () => {
    process.env.CBT_ENV = 'mobile';
    const capabilities = generateCBTCapabilities();

    expect(capabilities).toEqual(defaultMobileCapabilities);
  });

  it('generate desktop capabilities', () => {
    process.env.CBT_ENV = 'desktop';
    process.env.BROWSER = 'chrome';
    process.env.PLATFORM = 'Windows 8';

    const capabilities = generateCBTCapabilities();

    expect(capabilities).toEqual(desktopCapabilitiesChrW8);
  });

  it('generate desktop capabilities multiplatform', () => {
    process.env.CBT_ENV = 'desktop';
    process.env.BROWSER = 'chrome';
    process.env.PLATFORM = 'Windows 10, Windows 8';

    const capabilities = generateCBTCapabilities();

    expect(capabilities).toEqual(desktopCapabilitiesMultiplatform);
  });

  it('CBT env empty', () => {
    process.env.CBT_ENV = undefined;
    expect(generateCBTCapabilities).toThrowError(EmptyCBTEnvError);
  });

  it('CBT wrong platform arg', () => {
    process.env.CBT_ENV = 'error';
    expect(generateCBTCapabilities).toThrowError(WrongCBTEnvError);
  });
});
