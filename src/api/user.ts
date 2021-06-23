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

/**
 * 获取用户信息
 * @param params
 * @returns
 */
export const userInfo = (params?: any) => {
  return request({
    url: '/api/user/info',
    method: 'post',
    data: params,
  });
};
