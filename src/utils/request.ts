import { history } from 'umi';
import store from '@/store';
import axios from 'axios';
import { removeToken, getToken } from '@/utils/auth';
import { encrypt, decrypt } from '@/utils/crypto';

// interface MyMap {
//   [key: string]: any;
// }

/**
 * api字典表
 * @param apiModel api模式
 * @returns
 */
// const getUrl = (apiModel?: string) => {
//   const apiModels: MyMap = {
//     default: 'http://localhost:3000',
//     test2: 'https://api.muxiaoguo.cn/api/tianqi?city=长沙&type=1'
//   }
//   if (!apiModel) {
//     return apiModels['default']
//   }
//   return apiModels[apiModel] || apiModels['default']
// }

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 30 * 1000, // request timeout
});

// service.interceptors.request.

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (store.getState().user.token && !config.headers['X-Token']) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = store.getState().user.token;
    }

    config.data = encrypt(config.data);

    // config.baseURL = getUrl(config.apiModel)
    return config;
  },
  (error) => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  (response: any) => {
    const res = decrypt(response.data);
    // token过期
    if (res.code === 20001) {
      removeToken();
      console.log(getToken());
      history.replace('/login');
      return Promise.reject();
    }
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
