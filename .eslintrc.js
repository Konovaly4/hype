/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        node: true,
    },
    "extends": [
        "airbnb-base"
    ],
    plugins: [
        'babel',
        'import',
        'prettier',
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        'linebreak-style': 'off',
        'arrow-parens': 'off',
        'object-curly-newline': 'off',
        'no-mixed-operators': 'off',
        'arrow-body-style': 'off',
        'function-paren-newline': 'off',
        'no-plusplus': 'off',
        'space-before-function-paren': 0,
        'max-len': ['error', 100, 2, { ignoreUrls: true, }],
        'no-console': 'error',
        'no-alert': 'error',
        'no-param-reassign': 'off',
        'prefer-destructuring': 'off',
        'prettier/prettier': ['error'],
    }
};
