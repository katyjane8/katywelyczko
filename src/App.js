import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Social from './Social'
import Resume from './Resume'
import Home from './Home'
import './animation.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/social" component={Social} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    );
  }
}

export default App;
