// needed to convert jsx to js
import React from 'react';
import './Person.css';

// component is a functions returning some jsx/ custom html
// componets are self contained, reusable configuarable
// props is used to pass arguments
// props has a special property called children
// use functionl componet when ever possible and manage state 
// from few componets to make app light and predictable
const person = (props) => {
    // to embed js expressions in jsx include js in {}
    return (
        <>
            <p className="Person" 
                onClick={props.click}
            >
                I'm a person with name: {props.name}, Hobbies: {props.children}
            </p>
            <input type="text" onChange={props.change}/>
        </>
    );
};

export default person;