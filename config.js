const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const portfolioPath = path.join(__dirname, "web/dist/portfolio");

const __ = {
    ENV: {
        DEV: "development",
        PRODUCTION: "production"
    }
};

const defaultConfig = {
    env: process.env.ENV || __.ENV.DEV,
    app: {
        port: process.env.PORT || 3000
    },
    projects: _.map(fs.readdirSync(portfolioPath), project => {
        let projectDir = path.join(portfolioPath, project);
        let files = fs.readdirSync(projectDir);
        let screens = _.filter(files, f => /.png/.test(f));

        return {
            name: project,
            screens: _.map(screens, s => `portfolio/${project}/${s}`)
        };
    })
};

module.exports = {
    __,
    cfg: _.cloneDeep(defaultConfig),
    pubConfig: _.pick(defaultConfig, [
        "projects"
    ])
};