module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: { '\\.(css|scss)$': '<rootDir>/src/testStyleMock.js' },
  transform: { '^.+\\.tsx?$': ['ts-jest', { tsconfig: { target: 'ES2019', module: 'commonjs', esModuleInterop: true } }] }
};
