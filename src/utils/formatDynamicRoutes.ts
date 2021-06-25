export const formatDynamicRoutes = (routes: any[]) => {
  for (let route of routes) {
    if (route.hasOwnProperty('component')) {
      route.component = require('@/pages' + route.component + '.tsx').default;
    }
    if (route.hasOwnProperty('routes') && route.routes.length > 0) {
      let tmpRoutes = formatDynamicRoutes(route.routes);
      route.routes = tmpRoutes;
    }
  }
  return routes;
};
