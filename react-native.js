const { react: reactRestrictedImports } = require('./restrictedImports')

module.exports = {
  extends: [
    require.resolve('./node.js'),
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
    node: false,
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  ignorePatterns: ['**/__generated__/'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // React Plugin
    // Overrides rules from @react-native-community:
    // https://github.com/facebook/react-native/blob/3cf0291008dfeed4d967ebb95bdccbe2d52c5b81/packages/eslint-config-react-native-community/index.js#L287
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    // React-Native Plugin
    // Overrides rules from @react-native-community:
    // https://github.com/facebook/react-native/blob/3cf0291008dfeed4d967ebb95bdccbe2d52c5b81/packages/eslint-config-react-native-community/index.js#L313
    'react-native/no-unused-styles': 'error',
    'react-native/sort-styles': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-restricted-imports': ['error', reactRestrictedImports],
      },
    },
  ],
}
