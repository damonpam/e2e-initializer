class EmptyCBTEnvError extends Error {
  constructor() {
    super("The env variable CBT_ENV cannot be undefined");
  }
}

module.exports = {EmptyCBTEnvError};
