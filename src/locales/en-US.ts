import defaultSettings from '../../config/defaultSettings';
import { formatLocales } from './index';

const locale = {
  app: {
    welcome: `Welcome to use ${defaultSettings.title}`,
    switchLanguage: 'Switch Language',
    dashboard: 'Dashboard',
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
