const baseConfig = require('./wdio.conf').config;
const capabilities = require('./config/wdio/cbt/capabilities/capabilities');

const config = require('config');

const user = config.get('cbtUser');
const key = config.get('cbtAuth');

const conf = {
  ...baseConfig,

  user,
  key,
  hostname: 'hub.crossbrowsertesting.com',
  port: 80,
  path: '/wd/hub',
  services: ['crossbrowsertesting'],

  capabilities,
  afterScenario: require('./config/wdio/cbt/afterScenario')
};
module.exports = { config: conf };
