const Layout = '@/layouts/index';

const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        meta: {
          title: '首页',
          isMenu: true,
        },
      },
      {
        path: '/user',
        component: '@/pages/user',
        meta: {
          title: '用户中心',
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
