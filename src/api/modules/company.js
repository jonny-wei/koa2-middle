/**
* @desc 公司相关接口
* @author 180496
* @date 2020/5/19
*/
import request from '../../utils/request';

const feature = 'company';

const company = {
  /**
  * @desc 公司出勤数据统计
  * @author 180496
  * @date 2020/5/19
  */
  statisticApi(params) {
    return request({
      url: `/${feature}/statistic`,
      method: 'get',
      params,
    });
  },
  /**
  * @desc 公司下分厂列表接口
  * @author 180496
  * @date 2020/5/19
  */
  departmentsApi(params) {
    return request({
      url: `/${feature}/search/${params.id}`,
      method: 'post',
      data: params.data,
    });
  },
};

export default company;
