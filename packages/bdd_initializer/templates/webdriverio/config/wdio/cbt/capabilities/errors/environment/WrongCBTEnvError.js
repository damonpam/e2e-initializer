class WrongCBTEnvError extends Error {
  constructor(env) {
    super(`The selected env: ${env} does not exist in the capabilities generator`);
  }
}

module.exports = {WrongCBTEnvError};
