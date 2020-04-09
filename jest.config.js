module.exports = {
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
  testRegex: '(tests/.*.(test|spec)).(jsx?|tsx?)$',
  preset: 'ts-jest',
  testEnvironment: 'node',
};
