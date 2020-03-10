module.exports = {
    parser: '@typescript-eslint/parser', //parser for eslint
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],//extends
    plugins: ['@typescript-eslint'],// plugins
    env: {                          //browser and node environment will be used
        browser: true,
        node: true,
    },
    settings: {             //automatic detect react version.

        "import/resolver": {
            "webpack": { "config": "webpack.config.js" }
        },
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    parserOptions: {        //allow jsx
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures": {
            jsx: true
        }
    },
    rules: {
        "eqeqeq": "error",
        "semi": ["error", "never"],
        "camelcase": [0, {"properties": "never"}], //for eslint
        "@typescript-eslint/camelcase": 0, //for typescript
        "quotes": ["error", "single"],
        "no-var-requires": "off",
        "@typescript-eslint/no-var-requires": 0, //for typescript
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
    }
};
