import { ESLint } from 'eslint'

it('should have a correct configuration for a TypeScript file', async () => {
  const linter = new ESLint({
    overrideConfig: {
      extends: ['./node.js'],
    },
  })
  expect(await linter.calculateConfigForFile('node.ts')).toMatchSnapshot({ parser: expect.any(String) })
})

it('should have a correct configuration for a React file', async () => {
  const linter = new ESLint({
    overrideConfig: {
      extends: ['./react.js'],
    },
  })
  expect(await linter.calculateConfigForFile('node.tsx')).toMatchSnapshot({ parser: expect.any(String) })
})

it('should have a correct configuration for a Jest file', async () => {
  const linter = new ESLint({
    overrideConfig: {
      extends: ['./node.js'],
    },
  })
  expect(await linter.calculateConfigForFile('src/feature/node.test.ts')).toMatchSnapshot({
    parser: expect.any(String),
  })
})

it('should have a correct configuration for a Cypress e2e file', async () => {
  const linter = new ESLint({
    overrideConfig: {
      extends: ['./node.js'],
    },
  })
  expect(await linter.calculateConfigForFile('cypress/e2e/node.test.ts')).toMatchSnapshot({
    parser: expect.any(String),
  })
})
