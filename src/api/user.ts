import request from '../utils/request';

/**
 * 登录
 * @param params
 * @returns
 */
export const login = (params?: any) => {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: params,
  });
};
