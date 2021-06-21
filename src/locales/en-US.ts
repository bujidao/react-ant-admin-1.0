import defaultSettings from '../../config/defaultSettings';
import { formatLocales } from './index';

const locale = {
  app: {
    welcome: `Welcome to use ${defaultSettings.title}`,
    switchLanguage: 'Switch Language',
  },
  button: {
    default: 'Default Button',
    danger: 'Danger Button',
    primary: 'Primary Button',
    dashed: 'Dashed Button',
  },
};

export default formatLocales(locale);
