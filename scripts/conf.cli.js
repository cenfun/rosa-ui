module.exports = {

    precommit: {
        gitHook: false,
        enable: false
    },

    build: {
        define: {

        },
        cssExtract: false,

        afterAll: require('./after-all-build.js')
    }

};
