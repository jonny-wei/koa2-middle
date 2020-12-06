/**
 * Module dependencies.
 */
const app = require('../app');
const tools = require('../utils/tools');
const config = require('../config/index');
const logger = require('../logs/logs');

/**
 * Get port from environment and store in Express.
 */
const host = config.HOST || 'localhost';
const port = tools.normalizePort(config.PORT || '8000');

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, host, () => {
  logger.development(`当前运行环境-->${config.NODE_ENV}`);
  logger.development(`服务正运行在 http://${host}:${port}`);
});
