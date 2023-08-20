const tsConfig = require('./tsconfig.json');

module.exports = {
    extends: ['@0xforkitall/eslint-config'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: tsConfig.exclude,
};
