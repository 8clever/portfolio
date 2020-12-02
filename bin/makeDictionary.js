const fs = require("fs");
const _ = require("lodash");
const path = require("path");
const portfolioPath = path.join(__dirname, "../public/portfolio");
const dictionaryPath = path.join(__dirname, "../src/portfolioDictionary.json");
const langs = [ "en", "ru" ];

const portfolioDictionary = _.map(fs.readdirSync(portfolioPath), project => {
  const projectDir = path.join(portfolioPath, project);
  const files = fs.readdirSync(projectDir);
  const screens = _.filter(files, f => {
      return (
          /.png/.test(f) ||
          /.jpg/.test(f)
      )
  });
  const description = {};

  langs.forEach(lang => {
      description[lang] = fs.readFileSync(`${projectDir}/info.${lang}.txt`).toString();
  });

  return {
      description,
      name: project,
      screens: _.map(screens, s => `${project}/${s}`)
  };
});

fs.writeFileSync(dictionaryPath, JSON.stringify(portfolioDictionary));

