module.exports = {
  extends: ['../../.eslintrc.json'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/no-unused-prop-types': 0,
    'react/jsx-no-useless-fragment': 0,
    'prettier/prettier': 1,
    'no-nested-ternary': 1,
    'react/require-default-props': 0,
    'no-param-reassign': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': 0,
  },
};
