const _ = require("lodash");

const __ = {
    ENV: {
        DEV: "development",
        PRODUCTION: "production"
    }
};

const defaultConfig = {
    env: __.ENV.DEV,
    app: {
        port: 3000
    }
};

module.exports = {
    __,
    cfg: _.cloneDeep(defaultConfig)
};