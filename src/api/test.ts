import request from '../utils/request';

/**
 * 获取列表
 * @param params
 * @returns
 */
export const getList = (params?: any) => {
  return request({
    url: '/api/list',
    method: 'get',
    params,
  });
};

export const getList2 = (params?: any) => {
  return request({
    url: '/api/list',
    method: 'get',
    params,
  });
};
