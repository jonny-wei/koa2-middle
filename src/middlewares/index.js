const requireIndex = require('es6-requireindex');

const middleswares = {};
const modulesFiles = requireIndex(__dirname).modules;

Object.keys(modulesFiles).forEach((item) => {
  middleswares[item] = modulesFiles[item];
});
module.exports = middleswares;
