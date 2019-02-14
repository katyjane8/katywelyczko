import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Social from './Social';
import Resume from './Resume';

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
