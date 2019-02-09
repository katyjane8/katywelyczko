import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Social from '../src/Social'
import Resume from '../src/Resume'
import Home from '../src/Home'

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
