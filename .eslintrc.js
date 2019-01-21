module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "linebreak-style": [2, "unix"],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "curly": [2, "all"],
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "comma-dangle": [2, "always"],
    "camelcase": [2, { "properties": "always" }],
    "eqeqeq": [2, "smart"],
    "one-var-declaration-per-line": [2, "always"],
    "new-cap": 2,
    "no-case-declarations": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
