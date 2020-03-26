module.exports = {
    //parser for eslint
    parser: '@typescript-eslint/parser',
    //extends that preset
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    //plugins used except extends
    plugins: ['@typescript-eslint', 'jsx-a11y'],
    //browser and node environment will be used
    env: {
        browser: true,
        node: true
    },
    //automatic detect react version.
    settings: {
        'import/resolver': {
            'webpack': {'config': 'webpack.config.js'}
        },
        'react': {
            'pragma': 'React',
            'version': 'detect'
        }
    },
    //allow jsx
    parserOptions: {
        'ecmaVersion': 2019,
        'sourceType': 'module',
        'ecmaFeatures': {
            jsx: true
        }
    },
    rules: {
        //0, 1, 2 represents off, warning, error
        'eqeqeq': 2,
        'semi': ['error', 'never'],
        'camelcase': [0, {'properties': 'never'}],
        'quotes': ['error', 'single'],
        'no-var-requires': 0,
        'no-unused-vars': 2,
        '@typescript-eslint/camelcase': 0, //for typescript
        '@typescript-eslint/no-var-requires': 0, //for typescript
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'jsx-quotes': ['error', 'prefer-single']
    }
}
