import Cookies from 'js-cookie';
import { getLanguage } from '../../locales/index';
import { Route, setLocale } from 'umi';

/**
 * open 打开
 * collapsed 折叠
 */
type sideMenuType = 'open' | 'collapsed';

interface initAppStateParams {
  language: string;
  sideMenu: sideMenuType;
  pageRoutes: Route | undefined;
}

const initAppState: initAppStateParams = {
  language: getLanguage(),
  sideMenu: Cookies.get('side-menu'),
  pageRoutes: undefined,
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
    case 'TOGGLE_SIDE_MENU':
      Cookies.set('side-menu', action.payload);
      return {
        ...state,
        sideMenu: action.payload,
      };
    case 'SET_PAGE_ROUTES':
      return {
        ...state,
        pageRoutes: action.payload,
      };
    default:
      return state;
  }
};

/**
 * action
 * language
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
 * sidemenu
 * @param value
 * @returns
 */
export const toggleSideMenu = (value: sideMenuType): ReduxActionType => {
  return {
    type: 'TOGGLE_SIDE_MENU',
    payload: value,
  };
};

export const setPageRoutes = (value: any): ReduxActionType => {
  return {
    type: 'SET_PAGE_ROUTES',
    payload: value,
  };
};

const app = appReducer;

export default app;
