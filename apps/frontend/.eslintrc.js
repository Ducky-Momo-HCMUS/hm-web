module.exports = {
  extends: ['../../.eslintrc.json'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/no-unused-prop-types': 1,
    'react/jsx-no-useless-fragment': 0,
    'prettier/prettier': 1,
    'no-nested-ternary': 1,
  },
};
