import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './containers/index';
import { searchBooksReducer } from "./store/reducers";

const store = createStore(combineReducers({ index: searchBooksReducer }));

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
