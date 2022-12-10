module.exports = {
  extends: ['../../.eslintrc.json'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'class-methods-use-this': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-console': 0,
  },
  ignorePatterns: ['**/generated-types.ts'],
};
