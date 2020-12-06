/**
* @desc 日志封装
* @author 180496
* @date 2020/5/16
*/

import logConfig from '../config/log.config';

const log4js = require('log4js');

/**
 * @desc 记录器对象(日志输出配置)
 * @author Jonny Wei
 * @date 2020/5/12
 */
log4js.configure(logConfig);
const defaultLogger = log4js.getLogger('default');
const developmentLogger = log4js.getLogger('development');
const productionLogger = log4js.getLogger('production');
const errorLogger = log4js.getLogger('error');
const accessLogger = log4js.getLogger('access');

const logger = {};

/**
 * @desc 格式化请求日志
 * @author Jonny Wei
 * @date 2020/5/12
 */
const formatReqLog = (req, resTime) => {
  let logText = '';
  const { method } = req;
  // 访问方法
  logText += `request method: ${method}\n`;
  // 请求原始地址
  logText += `request originalUrl:  ${req.originalUrl}\n`;
  // 客户端ip
  logText += `request client ip:  ${req.ip}\n`;
  // 请求参数
  if (method === 'GET' || method === 'get') {
    logText += `${'response query: \n'} ${JSON.stringify(req.query)}\n`;
  } else {
    logText += `${'response body: \n'}${JSON.stringify(req.body)}\n`;
  }
  // 服务器响应时间
  logText += `response time: ${resTime}ms\n`;
  console.log(logText);
  return logText;
};

/**
 * @desc 格式化请求响应日志
 * @author Jonny Wei
 * @date 2020/5/12
 */
const formatAccessLog = (ctx, resTime) => {
  let logText = '';
  // 响应日志开始
  logText += '\n*************** access log start ***************\n';
  // 添加请求日志
  logText += formatReqLog(ctx.request, resTime);
  // 响应状态码
  logText += `response status: ${ctx.status}\n`;
  // 响应内容
  logText += `${'response body: \n'}${JSON.stringify(ctx.body)}\n`;
  // 响应日志结束
  logText += '*************** access log end ***************\n';

  return logText;
};

// 格式化错误日志
const formatError = (ctx, err, resTime = 0) => {
  let logText = '';
  // 错误信息开始
  logText += '\n*************** error log start ***************\n';
  // 添加请求日志
  logText += formatReqLog(ctx.request, resTime);
  // 错误名称
  logText += `err name: ${err.name}\n`;
  // 错误信息
  logText += `err message: ${err.message}\n`;
  // 错误详情
  logText += `err stack: ${err.stack}\n`;
  // 错误信息结束
  logText += '*************** error log end ***************\n';
  return logText;
};

// 封装error异常日志
logger.errorLog = (ctx, error, resTime) => {
  if (ctx && error) {
    errorLogger.error(formatError(ctx, error, resTime));
  }
};

// 封装access日志
logger.accessLog = (ctx, resTime) => {
  if (ctx) {
    accessLogger.info(formatAccessLog(ctx, resTime));
  }
};

// 封装开发日志
logger.development = (ctx) => {
  developmentLogger.debug(ctx);
};

// 封装日常日志(生产)
logger.production = (ctx) => {
  productionLogger.mark(ctx);
};
module.exports = logger;
