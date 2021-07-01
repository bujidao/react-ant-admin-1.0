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
      icon: 'table',
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
          icon: 'dashboard',
        },
      },
      {
        path: '/icon',
        component: '@/pages/icon',
        meta: {
          title: 'ICON图标',
          icon: 'icon',
        },
      },
      {
        path: '/table',
        component: '@/pages/table',
        meta: {
          title: '表格',
          icon: 'table',
        },
      },
      {
        path: '/nested',
        meta: {
          title: '路由嵌套',
          icon: 'nested',
        },
        routes: [
          {
            path: '/nested/menu1',
            meta: {
              title: '菜单1',
              icon: 'list',
            },
            routes: [
              {
                path: '/nested/menu1/menu1-1',
                meta: {
                  title: '菜单1-1',
                  icon: 'list',
                },
                routes: [
                  {
                    path: '/nested/menu1/menu1-1/menu1-1-1',
                    component: '@/pages/nested/menu1-1-1',
                    meta: {
                      title: '菜单1-1-1',
                      icon: 'list',
                    },
                  },
                  {
                    path: '/nested/menu1/menu1-1/menu1-1-2',
                    component: '@/pages/nested/menu1-1-2',
                    meta: {
                      title: '菜单1-1-2',
                      icon: 'manage',
                    },
                  },
                ],
              },
              {
                path: '/nested/menu1/menu1-2',
                component: '@/pages/nested/menu1-2',
                meta: {
                  title: '菜单1-2',
                  icon: 'manage',
                },
              },
            ],
          },
          {
            path: '/nested/menu2',
            component: '@/pages/nested/menu2',
            meta: {
              title: '菜单2',
              icon: 'manage',
            },
          },
        ],
      },
      {
        path: '/user',
        meta: {
          title: '用户中心',
          icon: 'user',
        },
        routes: [
          {
            path: '/user/list',
            component: '@/pages/user/list',
            meta: {
              title: '用户列表',
              icon: 'list',
            },
          },
          {
            path: '/user/manage',
            component: '@/pages/user/manage',
            meta: {
              title: '用户管理',
              icon: 'manage',
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
          icon: 'table',
        },
      },
      {
        path: '/i18n',
        component: '@/pages/i18n',
        meta: {
          title: '国际化',
          icon: 'language',
        },
      },
      {
        path: '/test',
        component: '@/pages/test',
        meta: {
          title: '测试页',
          icon: 'bug',
        },
      },
      {
        path: '/404',
        component: './404',
        hidden: true,
        meta: {
          title: '404',
          icon: 'table',
        },
      },
      {
        path: '/store',
        component: '@/pages/store',
        hidden: true,
        meta: {
          title: 'Store',
          icon: 'table',
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
