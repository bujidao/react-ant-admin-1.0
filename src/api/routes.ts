import request from '../utils/request';

/**
 * 获取动态路由
 * @param params
 * @returns
 */
export const getDynamicRoutes = (params?: any) => {
  return request({
    url: '/api/routes',
    method: 'post',
    data: params,
  });
};
