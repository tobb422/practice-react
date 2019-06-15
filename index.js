import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './containers/index';
import indexReducer from "./store/reducers";
import indexSage from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({ index: indexReducer }), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(indexSage)

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
