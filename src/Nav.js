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
                </header>
            </div>
        )
    }
}

export default Nav