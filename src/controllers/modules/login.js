import api from '../../api/index';

module.exports = {
  identityG: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      JsonCode: 0,
      JsonMessage: '',
      UserID: 30588,
      UserName: '小明',
      Roles: [],
      IsActive: true,
      IsProductStaff: false,
      Token: '1175a2da-4e26-40ce-b548-a34609b86fb6',
      DeviceNo: '172.16.18.5',
    };
  },
  login: async (ctx, next) => {
    const data = ctx.request.body;
    const result = await api.login.loginApi(data, ctx);
    ctx.body = result.data;
  },
  userInfo: async (ctx, next) => {
    const result = await api.login.userInfoApi(ctx);
    ctx.body = result.data;
  },
};
