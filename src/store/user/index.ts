import Cookies from 'js-cookie';
import { getLanguage } from '../../locales/index';
import { Route, setLocale } from 'umi';
import { setToken, getToken, removeToken } from '@/utils/auth';

interface initUserStateParams {
  token: string;
  id: string;
  username: string;
  avatar: string;
  roles: string[];
}

const initUserState: initUserStateParams = {
  token: getToken(),
  id: '',
  username: '',
  avatar: '',
  roles: [],
};

const userReducer = (state = initUserState, action: ReduxActionType) => {
  switch (action.type) {
    case 'SET_LOGIN_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_USET_INFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_USET_LOGOUT':
      removeToken();
      return {
        ...state,
        token: getToken(),
        id: '',
        username: '',
        avatar: '',
        roles: [],
      };
    default:
      return state;
  }
};

export const setLoginToken = (value: string): ReduxActionType => {
  setToken(value);
  return {
    type: 'SET_LOGIN_TOKEN',
    payload: value,
  };
};

export const setUserInfo = (value: any): ReduxActionType => {
  return {
    type: 'SET_USET_INFO',
    payload: value,
  };
};

export const setUserLogout = (): ReduxActionType => {
  return {
    type: 'SET_USET_LOGOUT',
  };
};

const user = userReducer;

export default user;
