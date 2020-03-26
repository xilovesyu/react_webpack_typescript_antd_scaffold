module.exports = {
    'moduleFileExtensions': [
        'js',
        'ts',
        'tsx'
    ],
    'transform': {
        '^.+\\.tsx?$': 'ts-jest'
    },
    'testMatch': [ '**/test/**/*.ts?(x)', '**/?(*.)(spec|test).js?(x)' ,'**/?(*.)(spec|test).ts?(x)' ],
    'moduleNameMapper': {
        '\\.(css|less)$': 'identity-obj-proxy'
    }
}