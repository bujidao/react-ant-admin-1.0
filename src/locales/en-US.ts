import defaultSettings from '../../config/defaultSettings';
import { formatLocales } from './index';

const locale = {
  app: {
    welcome: `Welcome to use ${defaultSettings.title}`,
    switchLanguage: 'Switch Language',
    dashboard: 'Dashboard',
    icon: 'Icons',
    table: 'Table',
    nestedRoutes: 'Nested Routes',
    userCenter: 'User Center',
    userList: 'User List',
    userManage: 'User Manage',
    international: 'International',
    404: '404',
    externalLink: 'External Link',
    permission: 'Permission',
    permissionDefault: 'Default Permission',
    permissionGuest: 'Guest Permission',
    permissionAdmin: 'Admin Permission',
    bug: 'Debug',
    loading: 'Loading',
    menu1: 'Menu 1',
    menu2: 'Menu 2',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-1-1': 'Menu 1-1-1',
    'menu1-1-2': 'Menu 1-1-2',
    noSupportScreenfull: 'Devides Not Support Screen Full',
    clipboard: 'Clipboard',
    pdf: 'PDF',
    login: 'Login',
    excel: 'Excel',
    'export-excel': 'Export Excel',
    'read-excel': 'Read Excel',
    'complex-table': 'Complex Table',
    'dynamic-table': 'Dynamic Table',
  },
  login: {
    login: 'Login',
    register: 'Register',
    forget: 'Forget?',
    logout: 'Log Out',
  },
  button: {
    default: 'Default Button',
    danger: 'Danger Button',
    primary: 'Primary Button',
    dashed: 'Dashed Button',
  },
};

export default formatLocales(locale);
