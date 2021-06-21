import Cookies from 'js-cookie';
import { getLanguage } from '../../locales/index';

/**
 * open 打开
 * collapsed 折叠
 */
type sideMenuType = 'open' | 'collapsed';
type initAppStateType = {
  language: string;
  sideMenu: sideMenuType;
};

const initAppState: initAppStateType = {
  language: getLanguage(),
  sideMenu: Cookies.get('side-menu'),
};

const appReducer = (state = initAppState, action: ReduxActionType) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      Cookies.set('language', action.payload);
      return {
        ...state,
        language: action.payload,
      };
    case 'TOGGLE_SIDE_MENU':
      Cookies.set('side-menu', action.payload);
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

const app = appReducer;

export default app;
