import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // useState returns array of current state and a callback to update state
  const [state, setState] = useState({
    persons: [
      {name: 'tuk',  hobbies: 'no hobbies'},
      {name: 'sid'}
    ],
    otherState: "other state"
  }
  );

  const switchNameHandler = () => {
    const persons = [...this.state.persons];
    // this doesn't merge data with old state instead of replace it
    setState({persons});
  }

    return (
      <div className="App">
        <h1>hi</h1>
        {/* passing name attribute to person */}
        {state.persons.map((person, index) => 
          <Person key={index} name={person.name}>{person.hobbies}</Person>)
        }
        {/* this.switchNameHandler() would immediately run the function on render */}
        <button onClick={this.switchNameHandler} >Switch</button>
      </div>
    );
}

export default app;
