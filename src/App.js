import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './home';
import social from './social';
import resume from './resume';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/social" component={social} />
          <Route path="/resume" component={resume} />
        </Switch>
      </Router>
    );
  }
}

export default App;
