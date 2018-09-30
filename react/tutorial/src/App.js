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
    ],
    showPersons: true
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

  nameChangeHandler = (event, name) => {
    const personIndex = this.state.persons.findIndex(person => person.name === name);
    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    });
  }

  toggleHandler = () => {
    this.setState({
      ...this.state,
      showPersons: !this.state.showPersons
    });
  }

  // every react component returns a JSX element
  // component would be rendered when there is update
  // of state(class components) or props(functional components)
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue'
    };

    let persons = null;

    // better approach then keeping it in return method
    // since the render is bound to be called for every
    // state change persons would be updated accordingly
    if(this.state.showPersons) {
      persons = (
        <div>
        {
          // index is index of element in list
          // helpful to refer person element in list
          this.state.persons.map((person, index) => {
            // while rendering list of jsx component react expects
            // key attribute on component which uniquely identifies
            // the element in dom. without a key for any update react
            // would rerender whole list for any change which is very 
            // inefficient for long lists. index although unique should
            // not be used as key as mutatying the list would change the
            // index of existing items.
            return <Person 
            key = {person.name}
            name={this.state.persons[index].name}
            age={this.state.persons[index].age}
            click={this.personShuffleHandler}
            change={(event) => this.nameChangeHandler(event, person.name)}>
            click to shuffle {this.state.name}
            </Person>
          })
        // <Person 
        // name={this.state.persons[0].name} 
        // age={this.state.persons[0].age}/>
        // <Person 
        // name={this.state.persons[1].name} 
        // age={this.state.persons[1].age} 
        // click={this.personShuffleHandler}
        // change={this.nameChangeHandler}>
        // <li>No hobbbies</li>
        // </Person>
        }
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Learning react</h1>
        <p>jsx paragraph</p>
        {
          //this.state.showPersons === true ? // can' use if and not efficient for complex jxs
        // <div>
        // <Person 
        // name={this.state.persons[0].name} 
        // age={this.state.persons[0].age}/>
        // {/* 
        //   we can even send html content as child 
        //   which would be recieved in the props of person
        //   component dynamically. 
        // */}
        // <Person 
        // name={this.state.persons[1].name} 
        // age={this.state.persons[1].age} 
        // click={this.personShuffleHandler}
        // change={this.nameChangeHandler}>
        // <li>No hobbbies</li>
        // </Person>
        // </div> //: null
        }
        {persons}
        <button onClick={this.toggleHandler}>Toogle</button>
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