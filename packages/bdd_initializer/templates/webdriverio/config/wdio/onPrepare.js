module.exports = function onPrepare(config, capabilities){
  // to run chrome headless the following flags are required
  // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
  if (!process.env.DEBUG) {
    capabilities
      .find(({ browserName }) => browserName === 'chrome')
      ['goog:chromeOptions'].args.push('--headless', '--disable-gpu');
  }
};
