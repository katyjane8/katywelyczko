import React from 'react'
import Nav from './Nav'

class Social extends React.Component {
  render () {
    return (
      <div className='social-page'>
        <Nav />
          <h1>
          <a href="https://www.instagram.com/katyjane8/">INSTAGRAM</a>
          </h1>
          <h1>
          <a href="https://www.facebook.com/kathrine.welyczko">FACEBOOK</a>
          </h1>
          <h1>
          <a href="https://twitter.com/katyjane8?lang=en/">TWITTER</a>
          </h1>
      </div>
    );
  }
}

export default Social