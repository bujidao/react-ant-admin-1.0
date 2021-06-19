/**
 * 侧边栏状态
 */

type SideMenuReducerType = {
  isOpen: boolean;
};

/**
 * state
 */
const initSideMenu: SideMenuReducerType = {
  isOpen: false,
};

/**
 * reducer
 * @param state SideMenuReducerType
 * @param action any
 * @returns
 */
const sideMenuReducer = (state = initSideMenu, action: any) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_MENU':
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

/**
 * export action
 * @param value boolean
 * @returns
 */
export const toggleSideMenu = (value: boolean): ReduxActionType => {
  return {
    type: 'TOGGLE_SIDE_MENU',
    payload: value,
  };
};

export default sideMenuReducer;
