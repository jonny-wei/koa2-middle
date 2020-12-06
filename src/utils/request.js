/**
 * @desc 请求转发axios实例
 * @author 180496
 * @date 2020/5/16
 */

import axios from 'axios';
import config from '../config';

const request = (conf, ctx) => {
  const token = ctx.request.header['x-interface-token'];
  const configSelf = Object.assign(conf, {
    baseURL: config.api_url,
    headers: { 'X-INTERFACE-TOKEN': token },
  });
  return axios(configSelf);
};

export default request;
