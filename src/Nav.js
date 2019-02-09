import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <Router>
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
                </header>
            </div>
            </Router>
        )
    }
}

export default Nav