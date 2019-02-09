import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss'
import './animation.js'


class Home extends React.Component {
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
                <div className="type-js headline">
                    <h1 className='text-js'>katy welyczko dot com</h1>
                </div>
            </div>
        )
    }
}

export default Home