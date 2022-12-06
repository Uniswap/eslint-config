const OFF = 0
const ERROR = 2

module.exports = {
  extends: [require.resolve('./node.js'), 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  env: {
    browser: true,
  },
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': OFF,
    'react/jsx-curly-brace-presence': [ERROR, { props: 'never', children: 'never' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
