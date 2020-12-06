/**
* @desc 公司级页面路由
* @author 180496
* @date 2020/5/19
*/
module.exports = (router, middleware, controller) => {
  router.get('/company/list', middleware.formatBody, controller.company.list);
  router.get('/company/statistic', middleware.formatBody, controller.company.statistic);
  router.post('/company/departments', middleware.formatBody, controller.company.departments);
};
