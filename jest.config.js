const jestModuleNameMapper = require('jest-module-name-mapper');

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|png|css)$': '<rootDir>/spec/empty-asset.js',
    '\\.(svg)$': '<rootDir>/spec/empty-component.js',
    ...jestModuleNameMapper.default('tsconfig.json')
  },
  setupFilesAfterEnv: [
    '<rootDir>spec/setup.js',
    '@testing-library/jest-dom/extend-expect'
  ],
  moduleDirectories: ['node_modules', 'src']
};
