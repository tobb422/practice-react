import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import indexReducer from "./reducers";
import indexSage from "./sagas";

const reducers = combineReducers({ index: indexReducer })

const sagaMiddleware = createSagaMiddleware()
const makeStore = initialState => {
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(indexSage);

  return store;
};

export default makeStore;
