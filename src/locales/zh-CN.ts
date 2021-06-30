import defaultSettings from '../../config/defaultSettings';
import { formatLocales } from './index';

const locale = {
  app: {
    welcome: `欢迎使用 ${defaultSettings.title}`,
    switchLanguage: '切换语言',
    dashboard: '首页',
  },
  login: {
    login: '登录',
    register: '注册',
    forget: '忘记密码?',
    logout: '退出登录',
  },
  button: {
    default: '默认按钮',
    danger: '危险按钮',
    primary: '主要按钮',
    dashed: '虚线按钮',
  },
};

export default formatLocales(locale);
