const Layout = '@/layouts/index';

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
    component: Layout,
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        meta: {
          title: '首页',
          icon: '',
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
        path: '/table',
        component: '@/pages/table',
        meta: {
          title: '表格',
        },
      },
      {
        path: '/about',
        component: '@/pages/about',
        meta: {
          title: '关于我们',
        },
      },
      {
        path: '/list',
        component: '@/pages/list',
        meta: {
          title: '列表测试',
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
    ],
  },
];

export default routes;
