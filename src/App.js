import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// pages to route
import SimonGame from './pages/SimonGame';
import About from './pages/About';
import Main from './pages/Main';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={browserHistory}>
      <Route path="/" component={Main}>
          <IndexRoute component={SimonGame} />
          <Route path="about" component={About} />
          <Route path="simongame" component={SimonGame} />
      </Route>
  </Router>
  </Provider>

    );
  }
}

export default App;
