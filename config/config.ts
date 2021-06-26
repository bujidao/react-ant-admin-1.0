import { defineConfig } from 'umi';
import routes from '../src/routes/index';
import settings from './defaultSettings';
import proxy from './proxy';
import theme from '../src/theme/index';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  base: `/react-ant-admin-1.0`,
  title: settings.title,
  // dynamicImport: {
  //   loading: '@/pages/loading/index',
  // },
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  theme: theme,
  routes: routes,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // ssr: {
  //   devServerRender: false,
  // },
  devServer: {
    port: 9327,
    host: '0.0.0.0',
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
  chainWebpack(memo, { env, webpack, createCSSRule }) {},
});
