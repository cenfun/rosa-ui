module.exports = {

    precommit: {
        gitHook: false,
        enable: false
    },

    test: {
        coverageProvider: 'v8',
        coverageOptions: {
            // logging: 'debug',

            // all: 'packages/rosa-ui/src',

            sourceFilter: {
                '**/webpack/**': false,
                '**/starfall-cli/**': false,
                '**/node_modules/**': false,
                '**/*.scss': false,
                '**/*.scss/**': false,
                '**/src/**': true
            },

            sourcePath: {
                'rosa-ui-app-bundle/': '',
                'rosa-ui/packages/rosa-ui/': ''
            }
        }
    },

    build: {
        define: {

        },
        cssExtract: false,

        afterAll: require('./after-all-build.js')
    }

};
