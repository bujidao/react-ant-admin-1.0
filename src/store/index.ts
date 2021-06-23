import { createStore, combineReducers } from 'redux';

import app from './app/index';
import user from './user/index';

const allReducer = {
  app,
  user,
};

const rootReducer = combineReducers(allReducer);

let store = createStore(rootReducer);

export default store;
