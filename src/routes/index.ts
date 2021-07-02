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
          title: 'dashboard',
          icon: 'dashboard',
        },
      },
      {
        path: '/icon',
        component: '@/pages/icon',
        meta: {
          title: 'icon',
          icon: 'icon',
        },
      },
      {
        path: '/table',
        component: '@/pages/table',
        meta: {
          title: 'table',
          icon: 'table',
        },
      },
      {
        path: '/nested',
        meta: {
          title: 'nestedRoutes',
          icon: 'nested',
        },
        routes: [
          {
            path: '/nested/menu1',
            meta: {
              title: 'menu1',
              icon: 'list',
            },
            routes: [
              {
                path: '/nested/menu1/menu1-1',
                meta: {
                  title: 'menu1-1',
                  icon: 'list',
                },
                routes: [
                  {
                    path: '/nested/menu1/menu1-1/menu1-1-1',
                    component: '@/pages/nested/menu1-1-1',
                    meta: {
                      title: 'menu1-1-1',
                      icon: 'list',
                    },
                  },
                  {
                    path: '/nested/menu1/menu1-1/menu1-1-2',
                    component: '@/pages/nested/menu1-1-2',
                    meta: {
                      title: 'menu1-1-2',
                      icon: 'manage',
                    },
                  },
                ],
              },
              {
                path: '/nested/menu1/menu1-2',
                component: '@/pages/nested/menu1-2',
                meta: {
                  title: 'menu1-2',
                  icon: 'manage',
                },
              },
            ],
          },
          {
            path: '/nested/menu2',
            component: '@/pages/nested/menu2',
            meta: {
              title: 'menu2',
              icon: 'manage',
            },
          },
        ],
      },
      {
        path: '/user',
        meta: {
          title: 'userCenter',
          icon: 'user',
        },
        routes: [
          {
            path: '/user/list',
            component: '@/pages/user/list',
            meta: {
              title: 'userList',
              icon: 'list',
            },
          },
          {
            path: '/user/manage',
            component: '@/pages/user/manage',
            meta: {
              title: 'userManage',
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
          title: 'loading',
          icon: 'table',
        },
      },
      {
        path: '/clipboard',
        component: '@/pages/clipboard',
        meta: {
          title: 'clipboard',
          icon: 'clipboard',
        },
      },
      {
        path: '/i18n',
        component: '@/pages/i18n',
        meta: {
          title: 'international',
          icon: 'language',
        },
      },
      {
        path: '/test',
        component: '@/pages/test',
        meta: {
          title: 'bug',
          icon: 'bug',
        },
      },
      {
        path: '/404',
        component: './404',
        meta: {
          title: '404',
          icon: '404',
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
            meta: { title: 'externalLink', icon: 'link' },
          },
        ],
      },
    ],
  },
];

export default routes;
