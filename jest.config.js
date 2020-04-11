module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-allure/dist/setup'],
  testPathIgnorePatterns: ['<rootDir>/lib', '<rootDir>/node_modules'],
  testRegex: '(tests/.*.(test|spec)).(jsx?|tsx?)$',
  reporters: ["default", "jest-junit", "jest-allure"],
};
