import React, { Component } from 'react';
import './App.css';
// import component as Person instead of person
// since lower case is reserved for original html elements
import Person from './Person/Person';

// every react component extends Component class
// React libary
class App extends Component {
  state = {
    persons: [
      {name: 'sid', age: 28},
      {name: 'tuk', age: 28},
      {name: 'maa', age: 52}
    ]
  }

  personShuffleHandler = () => {
    const persons = [...this.state.persons];
    
    for (let i = persons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [persons[i], persons[j]] = [persons[j], persons[i]];
    }

    this.setState({
      ...this.state,
      persons
    })
  }

  nameChangeHandler = event => {
    const persons = [...this.state.persons];
    persons[1].name = event.target.value;
    this.setState({
      ...this.state,
      persons
    })
  }

  // every react component returns a JSX element
  // component would be rendered when there is update
  // of state(class components) or props(functional components)
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue'
    }
    
    return (
      <div className="App">
        <h1>Learning react</h1>
        <p>jsx paragraph</p>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        {/* 
          we can even send html content as child 
          which would be recieved in the props of person
          component dynamically. 
        */}
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.personShuffleHandler}
        change={this.nameChangeHandler}>
        <li>No hobbbies</li>
        </Person>
        <button style={style} onClick={this.personShuffleHandler}>Shuffle</button>
      </div>
    );

    // below code is same as above JSX. JSX behind the 
    // scene coverted to below js code that's why we need to
    // import React even not used explicitely.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Learning react'));
    // since jsx is compiled to js we can't use class of html 
    // class is a valid js keyword.
  }
}

export default App;
