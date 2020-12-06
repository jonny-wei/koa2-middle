const requireIndex = require('es6-requireindex');

const api = {};
const modulesFiles = requireIndex(__dirname).modules;

Object.keys(modulesFiles).forEach((item) => {
  api[item] = modulesFiles[item];
});

module.exports = api;
