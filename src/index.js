import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/index'

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
  <App />,
  document.getElementById('root')
);
