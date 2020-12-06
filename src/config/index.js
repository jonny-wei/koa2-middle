const development = require('./dev.env');
const production = require('./prod.env');
const test = require('./test.env');

// 根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
  development,
  production,
  test,
}[process.env.NODE_ENV || 'development'];
