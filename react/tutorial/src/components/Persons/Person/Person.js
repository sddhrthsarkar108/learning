import React from 'react';
// import Person from 'Person.css'; won't work !!!
import './Person.css';
// importing css feature is provided by webpack
// it's dynamically injected in the script
// while rendering on browser

// a component is essentially a function
// returning some JSX representing custom html
// Componts are reusable, configurable and self content
// stateless compnents should be created as pure
// functions with props as argument from the container function
// it's nesyed into
const person = (props) => {

    if(Math.random() > 0.999) {
        throw new Error('error');
    }

    return (<div className="Person">
        <p>custom person component with name: {props.name},  age: {props.age}</p>
        {/*
            stateless componets may get the hndler from props
            passed down from the container compoents handling the state
        */}
        <p onClick={props.click}>{props.children}</p>
        {/*
            here we made two way binding which listen changes to input
            and then also capture the initial value by value binding
        */}
        <input onChange={props.change} value={props.name}></input>
    </div>);
    }

export default person;