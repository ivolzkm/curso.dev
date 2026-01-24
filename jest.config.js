// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // O ponto "." indica que o Next.js deve procurar o package.json
  // e o next.config.js no mesmo diretório onde este arquivo está.
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
