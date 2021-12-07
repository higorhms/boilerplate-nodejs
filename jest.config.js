const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/(data|domains|presentation)/**/*.ts', '!<rootDir>/src/(presentation/errors|presentation/helpers)/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: [
    "text-summary",
    "lcov",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
