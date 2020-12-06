/**
* @desc 登录接口
* @author 180496
* @date 2020/5/19
*/
import request from '../../utils/request';

const login = {
  /**
   * @desc 登录
   * @author 180496
   * @date 2020/5/19
   */
  loginApi(data, ctx) {
    return request({
      url: '/gms/login',
      method: 'post',
      data,
    }, ctx);
  },
  /**
  * @desc 获取用户信息
  * @author 180496
  * @date 2020/5/28
  */
  userInfoApi(ctx) {
    return request({
      url: '/gms/userinfo',
      method: 'get',
    }, ctx);
  },
};

export default login;
