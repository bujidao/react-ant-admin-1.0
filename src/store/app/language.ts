/**
 * 语言国际化
 */
type languageStateType = {
  language: string;
};

/**
 * state
 */
const initLanguageState: languageStateType = {
  language: 'zh-CN',
};

/**
 * reducer
 * @param state languageStateType
 * @param action any
 * @returns
 */
const languageReducer = (state = initLanguageState, action: any) => {
  switch (action.type) {
    case 'change_language':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

/**
 * action
 * @param value string
 * @returns
 */
export const toggleLanguage = (value: string): ReduxActionType => {
  return {
    type: 'change_language',
    payload: value,
  };
};

export default languageReducer;
