/**
 * @desc 部门/分厂级页面路由
 * @author 180496
 * @date 2020/5/19
 */
module.exports = (router, middleware, controller) => {
  router.get('/department/list', middleware.formatBody, controller.department.list);
  router.get('/department/statistic', middleware.formatBody, controller.department.statistic);
  router.post('/department/shiftOfDepartment', middleware.formatBody, controller.department.shiftOfDepartment);
  router.post('/department/team', middleware.formatBody, controller.department.team);
  router.post('/department/workshop', middleware.formatBody, controller.department.workshop);
};
