import React from 'react'
import Nav from './Nav'
import Counter from './components/Counter';

class Resume extends React.Component {
    render() {
        return (
            <div >
                <Nav />
                <Counter />
            </div>
        )
    }
}

export default Resume