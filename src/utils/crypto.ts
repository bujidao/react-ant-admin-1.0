/*
 * @Author       : Alex Ceng
 * @Date         : 2021-06-26 07:25:57
 * @LastEditors  : Alex Ceng
 * @LastEditTime : 2021-06-26 08:36:20
 * @Description  : crypto data
 */

/**
 * for more details
 * see: https://cryptojs.gitbook.io/docs/
 */
import { getToken } from './auth';
var CryptoJS = require('crypto-js');

const secret = 'mysecret';

interface encryptType {
  data: string;
}

export const encrypt = (data: any): encryptType => {
  const res = CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();
  return {
    data: res,
  };
};

export const decrypt = (data: encryptType) => {
  const encryptedData = data.data;
  const bytes = CryptoJS.AES.decrypt(encryptedData, secret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(originalText);
};
