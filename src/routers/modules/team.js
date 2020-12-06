/**
 * @desc 班组页面路由
 * @author 180496
 * @date 2020/5/19
 */
module.exports = (router, middleware, controller) => {
  router.get('/team/list', middleware.formatBody, controller.team.list);
  router.get('/team/statistic', middleware.formatBody, controller.team.statistic);
  router.post('/team/shiftOfTeam', middleware.formatBody, controller.team.shiftOfTeam);
  router.post('/team/group', middleware.formatBody, controller.team.group);
  router.post('/team/staff', middleware.formatBody, controller.team.staff);
  router.post('/team/call', middleware.formatBody, controller.team.call);
};
