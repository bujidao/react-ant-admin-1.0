const Layout = '@/layouts/index';

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        meta: {
          title: '首页',
          isMenu: true,
          icon: '',
        },
      },
      {
        path: '/user',
        meta: {
          title: '用户中心',
          isMenu: true,
        },
        routes: [
          {
            path: '/user/list',
            component: '@/pages/user/list',
            meta: {
              title: '用户列表',
              isMenu: true,
            },
          },
          {
            path: '/user/manage',
            component: '@/pages/user/manage',
            meta: {
              title: '用户管理',
              isMenu: true,
            },
          },
        ],
      },
      {
        path: '/table',
        component: '@/pages/table',
        meta: {
          title: '表格',
          isMenu: true,
        },
      },
      {
        path: '/about',
        component: '@/pages/about',
        meta: {
          title: '关于我们',
          isMenu: true,
        },
      },
      {
        path: '/list',
        component: '@/pages/list',
        meta: {
          title: '列表测试',
          isMenu: true,
        },
      },
      {
        path: '/404',
        component: './404',
        meta: {
          title: '404',
          isMenu: true,
        },
      },
    ],
  },
];

export default routes;
