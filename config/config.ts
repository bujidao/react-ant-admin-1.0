import { defineConfig } from 'umi';
import routes from '../src/routes/index';
import settings from './defaultSettings';
import proxy from './proxy';
import theme from '../src/theme/index';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  base: '/',
  title: settings.title,
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  theme: theme,
  routes: routes,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  ssr: {
    devServerRender: false,
  },
  fastRefresh: {},
  targets: {
    ie: 11,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
    baseSeparator: '-',
    // title: false
  },
});
