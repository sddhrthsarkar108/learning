import React from 'react';

export default props => {
    // this would give error since props are immutable
    // props.time = "";
    
    return (
        <h3>current time: {props.time}</h3>
    )
}