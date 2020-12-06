/**
* @desc 登录路由
* @author 180496
* @date 2020/5/19
*/
module.exports = (router, middleware, controller) => {
  router.post('/identity', controller.login.identityG);
  router.post('/login', controller.login.login);
  router.get('/user', controller.login.userInfo);
};
