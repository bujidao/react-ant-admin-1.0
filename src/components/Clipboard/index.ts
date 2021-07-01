import copy from 'copy-to-clipboard';
import { message } from 'antd';

export const clipboard = (text: any, args?: any) => {
  const clipRes = copy(text, args);
  if (clipRes) {
    message.success('复制成功');
  } else {
    message.error('复制失败');
  }
};
