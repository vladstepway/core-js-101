module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'operator-linebreak': ['error', 'after'],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
  },
};
