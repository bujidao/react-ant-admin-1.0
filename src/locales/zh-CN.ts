import defaultSettings from '../../config/defaultSettings';
import { formatLocales } from './index';

const locale = {
  app: {
    welcome: `欢迎使用 ${defaultSettings.title}`,
    switchLanguage: '切换语言',
    dashboard: '首页',
    icon: '图标',
    table: 'Table',
    nestedRoutes: '嵌套路由',
    userCenter: '用户中心',
    userList: '用户列表',
    userManage: '用户管理',
    international: '国际化',
    404: '404',
    externalLink: '外链',
    permission: '权限',
    permissionDefault: '默认权限',
    permissionGuest: '访客页面',
    permissionAdmin: '管理员页面',
    bug: '测试页',
    loading: 'Loading',
    menu1: '菜单 1',
    menu2: '菜单 2',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-1-1': '菜单 1-1-1',
    'menu1-1-2': '菜单 1-1-2',
    noSupportScreenfull: '设备不支持全屏',
    clipboard: '剪切板',
    pdf: 'PDF 文件',
    login: '登录',
    excel: 'Excel',
    'export-excel': '导出 Excel',
    'read-excel': '读取 Excel',
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
