module.exports = {
  defaultDesktopCapability: [{
    browserName: "chrome",
    name: "Windows 10 - chrome",
    platform: `Windows 10`,
    record_video: "true",
  }],
  defaultMobileCapabilities: [
    {
      browserName: 'Safari',
      deviceName: 'iPhone 11',
      platformVersion: '13.1.3',
      platformName: 'iOS',
      deviceOrientation: 'portrait'
    },
    {
      browserName: 'Chrome',
      deviceName: 'Galaxy S10',
      platformVersion: '10.0',
      platformName: 'Android',
      deviceOrientation: 'portrait'
    },
    {
      browserName: 'Safari',
      deviceName: 'iPad Pro Simulator',
      platformVersion: '11.0',
      platformName: 'iOS',
      deviceOrientation: 'landscape'
    }
  ]
}
