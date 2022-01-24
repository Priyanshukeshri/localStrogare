module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['babel', 'import', 'jsx-a11y'],
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/destructuring-assignment': [0, 'always'],
    'import/no-named-as-default ': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/order': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'consistent-return': 0,

  },
};
