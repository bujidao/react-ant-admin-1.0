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
      history.push('/i18n');
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
  if (matchedRoutes.length) {
    // set page title
    const pageTitle = getPageTitle(
      matchedRoutes[matchedRoutes.length - 1].route.meta.title || '',
    );
    document.title = pageTitle;
  }
};
