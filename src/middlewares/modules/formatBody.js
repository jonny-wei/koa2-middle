/**
 * @desc 响应数据格式化输出中间件(在router前调用)
 * @author Jonny Wei
 * @date 2020/5/12
 */

module.exports = async (ctx, next) => {
  try {
    await next(); // 执行路由
    if (ctx.body) {
      ctx.body = {
        code: ctx.response.status,
        success: true,
        message: 'success',
        data: ctx.body,
      };
    } else {
      ctx.body = {
        code: ctx.response.status,
        success: true,
        message: 'success',
      };
    }
  } catch (err) {
    console.log(err);
    ctx.response.status = err.response.status;
    ctx.body = {
      success: false,
      message: err.response.data.text,
    };
  }
};
