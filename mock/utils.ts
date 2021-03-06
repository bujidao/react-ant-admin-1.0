import { decrypt, encrypt } from '../src/utils/crypto';

export const checkToken = (req: any, res: any) => {
  const date = new Date();
  const h = date.getHours();
  const xToken = req.headers['x-token'];
  if (!xToken) {
    return false;
  }
  const xTokenArr = xToken.split('_');
  if (xTokenArr[xTokenArr.length - 1] != h) {
    res.send(sucessRes('', 'token已过期', 20001));
    return false;
  }
  return true;
};

export const sucessRes = (
  data: any,
  message: string = 'success',
  code?: number | undefined,
) => {
  const res = {
    code: code || 200,
    message: message,
    data: {
      ...data,
    },
  };
  return encrypt(res);
};
