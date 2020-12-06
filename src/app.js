import Koa2 from 'koa';
import KoaRouter from '@koa/router';
import KoaCors from '@koa/cors';
import KoaStatic from 'koa-static';
import KoaBody from 'koa-body';

import routers from './routers';

const app = new Koa2();
const router = new KoaRouter();

const logger = require('./logs/logs');
const config = require('./config/index');

// 日志中间件
app.use(async (ctx, next) => {
  const start = new Date();
  let ms;
  try {
    await next();
    ms = new Date() - start;
    logger.accessLog(ctx, ms);
  } catch (error) {
    ms = new Date() - start;
    logger.errorLog(ctx, error, ms);
  }
});

// 跨域中间件
app.use(KoaCors());

// 静态文件托管中间件
if (config.NODE_ENV === 'production') {
  app.use(KoaStatic(`${__dirname}/public`));
}

// body解析中间件
app.use(KoaBody({
  multipart: true,
  jsonLimit: '10mb',
  encoding: 'utf-8',
  jsonStrict: true,
}));

// 路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods());
routers(router);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
