const requireIndex = require('es6-requireindex');

const controllers = {};
const modulesFiles = requireIndex(__dirname).modules;

Object.keys(modulesFiles).forEach((item) => {
  controllers[item] = modulesFiles[item];
});

module.exports = controllers;
