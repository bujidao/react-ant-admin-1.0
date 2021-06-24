// enter file
import { history } from 'umi';
import getPageTitle from '@/utils/get-page-title';

import './styles/index.less';
import store from '@/store';
import { setPageRoutes } from '@/store/app/index';
import { getToken } from '@/utils/auth';
import { userInfo } from '@/api/user';
import { getDynamicRoutes } from '@/api/routes';
import { setUserInfo } from '@/store/user/index';

let dynamicRoutes = [];

/**
 * render
 */
export function render(oldRender: Function) {
  getDynamicRoutes().then((res) => {
    console.log(res);
    dynamicRoutes = res.data;
    oldRender();
  });
  // oldRender();
  // fetch('/user').then((auth: any) => {
  //   if (auth.isLogin) {
  //     oldRender();
  //   } else {
  //     // history.push('/login');
  //     oldRender();
  //   }
  // });
}

interface onRouteChangeParams {
  routes: any;
  matchedRoutes: any;
  location: any;
  action: any;
}

/**
 * onRouteChange
 */
export const onRouteChange = (params: onRouteChangeParams) => {
  const { routes, matchedRoutes, location, action } = params;

  // set page title
  if (
    matchedRoutes.length &&
    matchedRoutes[matchedRoutes.length - 1].route.meta
  ) {
    const pageTitle = getPageTitle(
      matchedRoutes[matchedRoutes.length - 1].route.meta.title || '',
    );
    document.title = pageTitle;
  }

  // set current page routes
  store.dispatch(setPageRoutes(matchedRoutes));

  /**
   * 路由校验
   */
  const whiteList = ['/login', '/auth-redirect']; // no redirect whitelist
  let currentRoute: any = '';
  if (matchedRoutes.length === 1) {
    currentRoute = matchedRoutes[0].route;
  }
  const hasToken = getToken();
  if (hasToken) {
    if (currentRoute.path === '/login') {
      history.replace('/');
    }
    const hasUserInfo = store.getState().user.id;
    if (hasUserInfo) {
    } else {
      userInfo().then((res) => {
        console.log(res);
        store.dispatch(setUserInfo(res.data));
      });
    }
  } else {
    if (whiteList.indexOf(currentRoute.path) !== -1) {
      // don`t need to login
    } else {
      history.replace('/login');
    }
  }
};
