type initAppStateType = {
  language: string;
  sideMenu: boolean;
};

const initAppState: initAppStateType = {
  language: 'zh-CN',
  sideMenu: true,
};

const appReducer = (state = initAppState, action: ReduxActionType) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    case 'TOGGLE_SIDE_MENU':
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
export const toggleSideMenu = (value: boolean): ReduxActionType => {
  return {
    type: 'TOGGLE_SIDE_MENU',
    payload: value,
  };
};

const app = appReducer;

export default app;
