const Layout = '@/layouts/index';
import settings from '../../config/defaultSettings';

/**
 *
 * Note: sub-menu will appear when route children.length >= 1
 *
 * hidden: true               if set true, item will not show in the sidebar(default: false)
 *
 * meta: {
    title: 'title'            the name show in sidebar、page title and breadcrumb (recommend set)
  }
 *
 */

const routes = [
  {
    path: '/login',
    component: '@/pages/login',
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        component: '@/pages/dashboard',
        meta: {
          title: '首页',
          icon: '',
        },
      },
      {
        path: '/table',
        component: '@/pages/table',
        meta: {
          title: '表格',
        },
      },
      {
        path: '/user',
        meta: {
          title: '用户中心',
        },
        routes: [
          {
            path: '/user/list',
            component: '@/pages/user/list',
            meta: {
              title: '用户列表',
            },
          },
          {
            path: '/user/manage',
            component: '@/pages/user/manage',
            meta: {
              title: '用户管理',
            },
          },
        ],
      },
      {
        path: '/loading',
        component: '@/pages/loading',
        hidden: true,
        meta: {
          title: '加载页面',
        },
      },
      {
        path: '/i18n',
        component: '@/pages/i18n',
        meta: {
          title: '国际化',
        },
      },
      {
        path: '/test',
        component: '@/pages/test',
        meta: {
          title: '测试页',
        },
      },
      {
        path: '/404',
        component: './404',
        hidden: true,
        meta: {
          title: '404',
        },
      },
      {
        path: '/store',
        component: '@/pages/store',
        hidden: true,
        meta: {
          title: 'Store',
        },
      },
      {
        path: '/external-link',
        routes: [
          {
            path: settings.github,
            meta: { title: 'External Link', icon: 'link' },
          },
        ],
      },
    ],
  },
];

export default routes;
