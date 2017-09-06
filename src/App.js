import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// pages to route
import SimonGame from './pages/SimonGame';
import About from './pages/About';
import Main from './pages/Main';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      <Route path="/" component={Main}>
          <IndexRoute component={SimonGame} />
          <Route path="about" component={About} />
          <Route path="simongame" component={SimonGame} />
      </Route>
  </Router>

    );
  }
}

export default App;
