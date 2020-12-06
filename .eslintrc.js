module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'max-len': ['error', { code: 300 }],
    'linebreak-style': [0, 'error', 'windows'],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
