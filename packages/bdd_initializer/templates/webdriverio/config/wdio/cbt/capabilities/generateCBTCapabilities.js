const { EmptyCBTEnvError } = require("./errors/environment/EmptyCBTEnvError");
const { WrongCBTEnvError } = require("./errors/environment/WrongCBTEnvError");

const { defaultDesktopCapability, defaultMobileCapabilities } = require("./defaultCapabilities");

const capabilitiesEnv = {
  desktop: generateDesktopCapabilities,
  mobile: generateMobileCapabilities
}

function generateMobileCapabilities() {
  return defaultMobileCapabilities;
}

function generateDesktopCapabilities() {
  let capabilities = defaultDesktopCapability;
  if (process.env.PLATFORM && process.env.BROWSER) {
    const platforms = process.env.PLATFORM.split(",");
    capabilities = platforms.map(function (plat) {
      const browserName = process.env.BROWSER;
      const name = `${plat.trim()} - ${process.env.BROWSER}`;
      const platform = plat.trim();
      const record_video = "true";

      return {
        browserName,
        name,
        platform,
        record_video
      }
    });
  }
  return capabilities;
}

const generateCBTCapabilities = function() {
  if (!process.env.CBT_ENV) {
    throw new EmptyCBTEnvError();
  }
  if (!capabilitiesEnv.hasOwnProperty(process.env.CBT_ENV)) {
    throw new WrongCBTEnvError(process.env.CBT_ENV);
  }
  return capabilitiesEnv[process.env.CBT_ENV]();
}

module.exports = {generateCBTCapabilities};
