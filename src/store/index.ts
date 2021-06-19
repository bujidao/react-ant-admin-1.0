import { createStore, combineReducers } from 'redux';

type languageStateType = {
  language: string;
};

const initLanguageState = {
  language: 'zh-aa',
};

const languageReducer = (
  state: languageStateType = initLanguageState,
  action: any,
) => {
  switch (action.type) {
    case 'change_language':
      return Object.assign({}, state, action);
    default:
      return state;
  }
};

const allReducer = {
  languageReducer,
};

const rootReducer = combineReducers(allReducer);

let store = createStore(rootReducer);

// console.log(store.getState() )

export default store;
