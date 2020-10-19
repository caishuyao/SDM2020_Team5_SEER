module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:jest/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  plugins: [
  ],
  rules: {
    'no-console': 'off',
  },
};
