import React from 'react';
import { Spring, config } from 'react-spring/renderprops';


const counter = () => (
    <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => <div style={props}>this is where the first part of the resume will go</div>}
    </Spring>
)

export default counter;