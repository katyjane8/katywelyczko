import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="nav">
                    <ul>
                        <Link to="/">home</Link>
                    </ul>
                    <ul>
                        <Link to="/resume">resume</Link>
                    </ul>
                    <ul>
                        <Link to="/social">social</Link>
                    </ul>
                    <ul>
                        <a href="https://github.com/katyjane8">github</a>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Nav