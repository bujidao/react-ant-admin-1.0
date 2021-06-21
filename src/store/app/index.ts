import Cookies from 'js-cookie';
import { getLanguage } from '../../locales/index';
import { setLocale } from 'umi';

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
