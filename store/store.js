import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

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
