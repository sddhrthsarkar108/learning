import React from 'react';

const Part = ({onClick, name, desc}) => {
    return (
        <div>
            <h3 onClick={onClick}>Part Name: {name}</h3>
            <p>Part Description: {desc}</p>
        </div>
    )
}

export default Part;