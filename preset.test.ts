import { ESLint } from 'eslint'

it('should have a correct configuration for a TypeScript file', async () => {
  const linter = new ESLint({
    overrideConfig: {
      extends: ['./node.js'],
    },
  })
  expect(await linter.calculateConfigForFile('node.test.ts')).toMatchSnapshot({ parser: expect.any(String) })
})

it('should have a correct configuration for a React file', async () => {
  const linter = new ESLint({
    overrideConfig: {
      extends: ['./react.js'],
    },
  })
  expect(await linter.calculateConfigForFile('node.test.ts')).toMatchSnapshot({ parser: expect.any(String) })
})
