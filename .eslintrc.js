module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    camelcase: 'off'
  }
}
