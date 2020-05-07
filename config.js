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

const langs = [ "en", "ru" ];

const defaultConfig = {
    env: process.env.ENV || __.ENV.DEV,
    app: {
        port: process.env.PORT || 3000
    },
    projects: _.map(fs.readdirSync(portfolioPath), project => {
        const projectDir = path.join(portfolioPath, project);
        const files = fs.readdirSync(projectDir);
        const screens = _.filter(files, f => /.png/.test(f));
        const description = {};

        langs.forEach(lang => {
            description[lang] = fs.readFileSync(`${projectDir}/info.${lang}.txt`).toString();
        });

        return {
            description,
            name: project,
            screens: _.map(screens, s => `${project}/${s}`)
        };
    })
};

module.exports = {
    __,
    cfg: _.cloneDeep(defaultConfig),
    pubConfig: _.pick(defaultConfig, [
        "projects",
        "env"
    ])
};