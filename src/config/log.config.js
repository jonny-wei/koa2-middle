/**
 * @desc 日志输出配置
 * @author Jonny Wei
 * @date 2020/5/12
 * level：off < trace < debug < info < warn < error < fatal < mark < all
 */
import path from 'path';

// 日志根目录
const baseLogPath = path.resolve('./logFiles');

// 默认日志目录
const defaultPath = '/defaultLogs';
const defaultFileName = 'day';
const defaultLogPath = `${baseLogPath + defaultPath}/${defaultFileName}`;

// 错误日志目录
const errorPath = '/errorLogs';
const errorFileName = 'error';
const errorLogPath = `${baseLogPath + errorPath}/${errorFileName}`;

// 响应日志目录
const accessPath = '/accessLogs';
const accessFileName = 'access';
const accessLogPath = `${baseLogPath + accessPath}/${accessFileName}`;

const logConfig = {
  appenders: {
    // 输出到控制台
    console: {
      type: 'console',
    },
    // 输出到日期文件(日期滚动日志-日常日志)
    data_file: {
      type: 'dateFile',
      filename: defaultLogPath, // 您要写入日志文件的路径
      alwaysIncludePattern: true, // （默认为false） - 将模式包含在当前日志文件的名称以及备份中
      daysToKeep: 10, // 时间文件 保存多少天，距离当前天daysToKeep以前的log将被删除
      pattern: 'yyyy-MM-dd.log', // （可选，默认为.yyyy-MM-dd每天滚动） - 用于确定何时滚动日志的模式。格式:.yyyy-MM-dd-hh:mm:ss.log
      encoding: 'utf-8', // default "utf-8"，文件的编码
      // compress : true,//（默认为false） - 在滚动期间压缩备份文件（备份文件将具有.gz扩展名）
      path: defaultPath, // 自定义属性，日志的根目录
    },
    // 输出到日期文件(日期滚动日志但只输出错误的logs-异常日志)
    error_file: {
      type: 'dateFile',
      filename: errorLogPath,
      alwaysIncludePattern: true,
      daysToKeep: 10,
      pattern: 'yyyy-MM-dd.log', // 每天滚动
      encoding: 'utf-8',
      path: errorPath, // 自定义属性，日志的根目录
    },
    // 输出到日期文件(请求进出日志-请求响应日志)
    access_file: {
      type: 'dateFile',
      filename: accessLogPath,
      alwaysIncludePattern: true,
      daysToKeep: 10,
      pattern: 'yyyy-MM-dd.log', // 每天滚动
      encoding: 'utf-8',
      path: accessPath, // 自定义属性，日志的根目录
    },
  },
  categories: {
    default: { appenders: ['console', 'data_file'], level: 'info' }, // 默认log类型，输出到控制台和log日期文件 日志等级大于info
    development: { appenders: ['console'], level: 'debug' }, // 开发环境 输出到控制台 日志等级大于debug
    production: { appenders: ['data_file'], level: 'warn' }, // 日常日志(生产环境) 输到出日期命名的文件 日志等级大于warn
    error: { appenders: ['error_file'], level: 'error' }, // 异常日志 单独输出到error文件中
    access: { appenders: ['access_file'], level: 'all' }, // 请求响应日志 单独输出到access文件中
  },
  baseLogPath,
};

export default logConfig;
