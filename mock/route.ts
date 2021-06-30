import mockjs from 'mockjs';
import { checkToken } from './utils';
import { decrypt, encrypt } from '../src/utils/crypto';

const sucessRes = (
  data: any,
  message: string = 'success',
  code?: number | undefined,
) => {
  const res = {
    code: code || 200,
    message: message,
    data: data,
  };
  return encrypt(res);
};

export default {
  'POST /api/routes': (req: any, res: any) => {
    let route: any = [];
    if (req.headers['x-token'].indexOf('admin') !== -1) {
      route = [
        {
          path: '/permission',
          meta: {
            title: '账户权限',
            icon: 'lock',
          },
          routes: [
            {
              path: '/permission/index',
              component: '/permission/index',
              meta: {
                title: '默认权限页',
                icon: 'user-info',
              },
            },
            {
              path: '/permission/admin',
              component: '/permission/admin',
              meta: {
                title: 'admin权限',
                icon: 'admin',
              },
            },
            {
              path: '/permission/guest',
              component: '/permission/guest',
              meta: {
                title: 'guest权限',
                icon: 'admin',
              },
            },
          ],
        },
      ];
    } else if (req.headers['x-token'].indexOf('guest') !== -1) {
      route = [
        {
          path: '/permission',
          meta: {
            title: '账户权限',
          },
          routes: [
            {
              path: '/permission/index',
              component: '/permission/index',
              meta: {
                title: '默认权限页',
              },
            },
            {
              path: '/permission/guest',
              component: '/permission/guest',
              meta: {
                title: 'guest权限',
              },
            },
          ],
        },
      ];
    }
    res.send(sucessRes(route));
  },
};
