import React, { Component } from "react";
import "./App.css";
// import component as Person instead of person
// since lower case is reserved for original html elements
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// every react component extends Component class
// React libary
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "sid", age: 28 },
      { id: 2, name: "tuk", age: 28 },
      { id: 3, name: "maa", age: 52 }
    ],
    showPersons: true
  };

  personShuffleHandler = () => {
    const persons = [...this.state.persons];

    for (let i = persons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [persons[i], persons[j]] = [persons[j], persons[i]];
    }

    this.setState({
      persons
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      ...this.state,
      persons
    });
  };

  toggleHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  // every react component returns a JSX element
  // component would be rendered when there is update
  // of state(class components) or props(functional components)
  // render of container should be as lean as possible
  // that why we delegated rendering on person list in separate 
  // component called persons
  render() {
    // for every state or prop change this line would be printed
    // on console since react calls the render() method
    console.log("****");

    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue"
    // };

    // we can capture the jsx into a variable
    let persons = null;

    // better approach then keeping it in return method
    // since the render is bound to be called for every
    // state change persons would be updated accordingly
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            <Persons
              persons={this.state.persons}
              click={this.personShuffleHandler}
              change={this.nameChangeHandler}
            />
          }
        </div>
      );
    }

    return (
      <div className="App">
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
          persons
        }
        <Cockpit toggle={this.toggleHandler} shuffle={this.personShuffleHandler}/>
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