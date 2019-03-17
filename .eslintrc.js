module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'react-app',
  ],
  rules: {
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '16.6.3',
    },
  },
}
