// enter file
import { history } from 'umi';
import getPageTitle from '@/utils/get-page-title';

import './styles/index.less';

// import './store/index'

/**
 * render
 */
export function render(oldRender: Function) {
  fetch('/user').then((auth: any) => {
    if (auth.isLogin) {
      oldRender();
    } else {
      // history.push('/login');
      oldRender();
    }
  });
}

type onRouteChangeParams = {
  routes: any;
  matchedRoutes: any;
  location: any;
  action: any;
};

/**
 * onRouteChange
 */
export const onRouteChange = (params: onRouteChangeParams) => {
  const { routes, matchedRoutes, location, action } = params;
  // debugger
  if (
    matchedRoutes.length &&
    matchedRoutes[matchedRoutes.length - 1].route.meta
  ) {
    // set page title
    const pageTitle = getPageTitle(
      matchedRoutes[matchedRoutes.length - 1].route.meta.title || '',
    );
    document.title = pageTitle;
  }
};
