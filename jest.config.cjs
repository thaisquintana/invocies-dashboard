// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/$1'
  }
}
