import React from 'react'
import Nav from './Nav'
import './App.scss'
import './animation.js'


class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <div className="type-js headline">
                    <h1 className='text-js'>katy welyczko dot com</h1>
                </div>
            </div>
        )
    }
}

export default Home