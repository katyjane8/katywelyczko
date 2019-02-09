import React, { Component } from 'react';
import './animation.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="nav">
          <div className='btn'>
            <ul>
              <a href="/">home</a>
            </ul>
          </div>
            <ul>
              <a href="/resume">resume</a>
            </ul>
            <ul>
              <a href="/social">social</a>
            </ul>
        </header>
          <div className="type-js headline">
            <h1 className='text-js'>katy welyczko dot com</h1>
          </div>
      </div>
    );
  }
}

export default App;
