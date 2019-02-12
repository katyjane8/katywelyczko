import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import social from './social.js';
import resume from './resume.js';
import home from './home.js';

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
