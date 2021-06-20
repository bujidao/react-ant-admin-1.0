import { createStore, combineReducers } from 'redux';

import app from './app/index';

const allReducer = {
  app,
};

const rootReducer = combineReducers(allReducer);

let store = createStore(rootReducer);

export default store;
