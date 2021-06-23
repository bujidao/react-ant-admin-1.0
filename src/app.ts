// enter file
import { history } from 'umi';
import getPageTitle from '@/utils/get-page-title';

import './styles/index.less';
import store from '@/store';
import { setPageRoutes } from '@/store/app/index';

/**
 * render
 */
export function render(oldRender: Function) {
  oldRender();
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
  // debugger

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
};
