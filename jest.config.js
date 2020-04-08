module.exports = {
  projects: ['<rootDir>/packages/*'],
  reporters: ['default', 'jest-junit'],
  testRegex: '(tests/.*.(test|spec)).(jsx?|tsx?)$',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  }
};
