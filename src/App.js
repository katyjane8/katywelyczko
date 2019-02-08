import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="nav">
          <ul>
            <a href="/">home</a>
          </ul>
          <ul>
            <a href="/resume">resume</a>
          </ul>
          <ul>
            <a href="/social">social</a>
          </ul>
        </header>
        <h1>katy welyczko dot com</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
