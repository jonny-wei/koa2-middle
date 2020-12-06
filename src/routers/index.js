const requireIndex = require('es6-requireindex');
const controller = require('../controllers');
const middleware = require('../middlewares');

const modulesFiles = requireIndex(__dirname).modules;

module.exports = (router) => {
  Object.keys(modulesFiles).forEach((item) => {
    modulesFiles[item](router, middleware, controller);
  });
};
