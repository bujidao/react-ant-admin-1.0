import Cookies from 'js-cookie';
import { getLanguage } from '../../locales/index';
import { Route, setLocale } from 'umi';

/**
 * open 打开
 * collapsed 折叠
 */
type sideMenuStateType = 'open' | 'collapsed';

interface initAppStateParams {
  language: string;
  sideMenuState: sideMenuStateType;
  pageRoutes: Route | undefined;
  sideMenu: string[];
}

/**
 * language: language
 * sideMenuState: open / collapsed
 * pageRoutes: current page route path, main used in breadcrumb
 * sideMenu: the route lists of sideMenu
 */
const initAppState: initAppStateParams = {
  language: getLanguage(),
  sideMenuState: Cookies.get('side-menu'),
  pageRoutes: undefined,
  sideMenu: [],
};

const appReducer = (state = initAppState, action: ReduxActionType) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      const newLanguage = action.payload;
      Cookies.set('language', newLanguage);
      setLocale(newLanguage, false);
      return {
        ...state,
        language: newLanguage,
      };
    case 'TOGGLE_SIDE_MENU_STATE':
      Cookies.set('side-menu', action.payload);
      return {
        ...state,
        sideMenuState: action.payload,
      };
    case 'SET_PAGE_ROUTES':
      return {
        ...state,
        pageRoutes: action.payload,
      };
    case 'SET_SIDE_MENU':
      return {
        ...state,
        sideMenu: action.payload,
      };
    default:
      return state;
  }
};

/**
 * action
 * toggle language
 * @param value
 * @returns
 */
export const toggleLanguage = (value: string): ReduxActionType => {
  return {
    type: 'TOGGLE_LANGUAGE',
    payload: value,
  };
};

/**
 * action
 * toggle side menu state
 * @param value
 * @returns
 */
export const toggleSideMenuState = (
  value: sideMenuStateType,
): ReduxActionType => {
  return {
    type: 'TOGGLE_SIDE_MENU_STATE',
    payload: value,
  };
};

/**
 * action
 * set current page route
 * @param value
 * @returns
 */
export const setPageRoutes = (value: any): ReduxActionType => {
  return {
    type: 'SET_PAGE_ROUTES',
    payload: value,
  };
};

/**
 * action
 * set side menu list
 * @param value
 * @returns
 */
export const setSideMenu = (value: any): ReduxActionType => {
  return {
    type: 'SET_SIDE_MENU',
    payload: value,
  };
};

const app = appReducer;

export default app;
