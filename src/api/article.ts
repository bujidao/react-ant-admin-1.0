import request from '../utils/request';

/**
 * 获取列表
 * @param params
 * @returns
 */
export const getArticleList = (params?: any) => {
  return request({
    url: '/api/article/list',
    method: 'get',
    params,
  });
};
