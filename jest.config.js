const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '/workspaces/curso.dev',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)