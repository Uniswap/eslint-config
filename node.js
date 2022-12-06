const OFF = 0
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'import', 'simple-import-sort', 'unused-imports'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'prettier/prettier': [
      ERROR,
      {
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    'import/no-unused-modules': [ERROR, { unusedExports: true }],
    'unused-imports/no-unused-imports': ERROR,
    'simple-import-sort/imports': ERROR,
    'simple-import-sort/exports': ERROR,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/ban-ts-comment': OFF,
        '@typescript-eslint/ban-ts-ignore': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: '@ethersproject/providers',
                message: 'Please only use Providers instantiated in constants/providers to improve traceability.',
                allowTypeImports: true,
              },
              {
                name: 'ethers',
                message: "Please import from '@ethersproject/module' directly to support tree-shaking.",
              },
              {
                name: 'styled-components',
                message: 'Please import from styled-components/macro.',
              },
              {
                name: '@lingui/macro',
                importNames: ['t'],
                message: 'Please use <Trans> instead of t.',
              },
            ],
            patterns: [
              {
                group: ['**/dist'],
                message: 'Do not import from dist/ - this is an implementation detail, and breaks tree-shaking.',
              },
              {
                group: ['!styled-components/macro'],
              },
            ],
          },
        ],
      },
    },
    {
      // Taken from Jest's default 'testMatch' config
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
  ],
}
