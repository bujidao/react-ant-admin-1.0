// enter file
import { history } from 'umi';
import getPageTitle from '@/utils/get-page-title';

import './styles/index.less';
import store from '@/store';
import { setPageRoutes, setSideMenu } from '@/store/app/index';
import { getToken } from '@/utils/auth';
import { userInfo } from '@/api/user';
import { getDynamicRoutes } from '@/api/routes';
import { setUserInfo } from '@/store/user/index';
import { formatDynamicRoutes } from '@/utils/formatDynamicRoutes';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

/**
 * tmp app routes
 * this argument used in patchRoutes Function
 */
let appRoutesState: any;

/**
 * modify route
 * modify routes director，return void
 *
 * @params routes: current routes
 * @params dynamicRoutes: the routes that design to add later
 */
export const patchRoutes = ({ routes, dynamicRoutes = [] }): void => {
  const newDynamicRoutes = formatDynamicRoutes(dynamicRoutes);
  for (let route of routes) {
    if (route.path === '/') {
      /**
       * inset dynamicRoutes into last one position
       * the last one position is default error component: 404
       * from the react-route rules: you can`t place a component after error component else project unable to find it.
       */
      route.routes.splice(route.routes.length - 1, 0, ...newDynamicRoutes);
      store.dispatch(setSideMenu(route.routes));
    }
  }
  appRoutesState = Object.assign([], routes);
};

/**
 * rewrite render
 */
export function render(oldRender: Function) {
  oldRender();
}

interface onRouteChangeParams {
  routes: any;
  matchedRoutes: any;
  location: any;
  action: any;
}

/**
 * do something when first loading or when route change
 */
export const onRouteChange = async (params: onRouteChangeParams) => {
  NProgress.start();
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
  await store.dispatch(setPageRoutes(matchedRoutes));

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
    const hasUserInfo = await store.getState().user.id;
    if (hasUserInfo) {
      // if user info
    } else {
      // if not user info

      // fitch user base info
      await userInfo().then((res) => {
        store.dispatch(setUserInfo(res.data));
        NProgress.set(0.3);
      });

      // access dynamic routes
      await getDynamicRoutes().then((res) => {
        patchRoutes({
          routes: appRoutesState,
          dynamicRoutes: res.data || [],
        });
        NProgress.set(0.8);
      });
      NProgress.done();
    }
  } else {
    if (whiteList.indexOf(currentRoute.path) !== -1) {
      // don`t need to login
      NProgress.done();
    } else {
      history.replace('/login');
      NProgress.done();
    }
  }
  NProgress.done();
};
