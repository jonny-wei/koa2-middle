/**
 * @desc 开发环境配置
 * @author Jonny Wei
 * @date 2020/5/11
 */

module.exports = {
  NODE_ENV: 'development', // 环境名称
  HOST: 'localhost', // 应用服务地址
  PORT: 8701, // 应用服务端口号
  mongodb_url: '', // 数据库地址
  redis_url: '', // redis地址
  redis_port: '', // redis端口号
  api_url: 'http://localhost:8311', // 中间层对接后端接口的url
};
