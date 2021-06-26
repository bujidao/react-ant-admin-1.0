import mockjs from 'mockjs';
import { checkToken, sucessRes } from './utils';
import { decrypt } from '../src/utils/crypto';

export default {
  'POST /api/user/login': (req: any, res: any) => {
    const date = new Date();
    const h = date.getHours();
    const { username, password } = decrypt(req.body);
    if (username === 'admin') {
      res.send(
        sucessRes(
          {
            token: 'admin_token_' + h,
          },
          '登录成功',
        ),
      );
    } else if (username === 'guest') {
      res.send(
        sucessRes(
          {
            token: 'guest_token_' + h,
          },
          '登录成功',
        ),
      );
    } else {
      res.send(sucessRes('', '登录失败'));
    }
  },

  'POST /api/user/info': (req: any, res: any) => {
    checkToken(req, res);
    const xToken = req.headers['x-token'];
    const xTokenArr = xToken.split('_');
    const checkedToken = xTokenArr[0] + '_' + xTokenArr[1];
    switch (checkedToken) {
      case 'admin_token':
        res.send(
          sucessRes({
            id: '1',
            username: '周杰伦',
            avatar:
              'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
            roles: ['admin'],
          }),
        );
        break;
      case 'guest_token':
        res.send(
          sucessRes({
            id: '2',
            username: '张三',
            avatar:
              'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
            roles: ['guest'],
          }),
        );
        break;
      default:
        res.send(sucessRes('', 'token不合法'));
        break;
    }
  },
};
