import mockjs from 'mockjs';

const sucessRes = (data: any, message: string = 'success') => {
  const res = {
    code: 200,
    message: message,
    data: data,
  };
  return res;
};

export default {
  'POST /api/user/login': (req: any, res: any) => {
    const { username, password } = req.body;
    if (username === 'admin') {
      res.send(sucessRes('当前身份 admin', '登录成功'));
    } else if (username === 'guest') {
      res.send(sucessRes('当前身份 guest', '登录成功'));
    } else {
      res.send(sucessRes('', '登录失败'));
    }
  },
};
