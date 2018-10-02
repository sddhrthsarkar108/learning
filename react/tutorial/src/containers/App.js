import React, { Component } from "react";
// import React, { PureComponent } from "react";
// PureComponent has build in implementation of shouldComponentUpdate
import "./App.css";
// import component as Person instead of person
// since lower case is reserved for original html elements
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// every react component extends Component class
// React libary
class App extends Component {
  // don't cause side-effects or react would rerender
  constructor(props) {
    super(props);
    console.log("[App.js] inside constructor");
    this.topButton = React.createRef();
  }

  // don't cause side-effects or react would rerender
  componentWillMount() {
    console.log("[App.js] inside componet will mount");
  }

  // don't cause side-effects or react would rerender
  // won't be called for internal state change
  // through the call to setState method
  // rather it's called on state change triggered by
  // parent via props
  componentWillReceiveProps(nextProps) {
    // called on state change after render of parent component
    // called of this won't work for this App.js
    console.log("App.js inside component will receive props");
  }

  // here we can controll the rerendering on update
  // thus improving performance of the application
  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js inside should component update", nextProps, nextState);
    return (
      this.state.showPersons !== nextState.showPersons ||
      this.state.persons !== nextState.persons
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("App.js inside component will update", nextProps, nextState);
  }

  state = {
    persons: [
      { id: 1, name: "sid", age: 28 },
      { id: 2, name: "tuk", age: 28 },
      { id: 3, name: "maa", age: 52 }
    ],
    showPersons: true,
    toggleClicked: 0
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
    const showPersons = this.state.showPersons;

    this.setState((prevState, props) => {
      return {
        showPersons: !showPersons,
        // shouldn't update the counter this way
        // bacause this.setState is run asyncronously
        // thus may lead to inconsistent state
        // this non trivial case applicable for the
        // scenario where state change depends on previos
        // state change
        // toggleClicked: this.state.toggleClicked + 1
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  // every react component returns a JSX element
  // component would be rendered when there is update
  // of state(class components) or props(functional components)
  // render of container should be as lean as possible
  // that why we delegated rendering on person list in separate
  // component called persons
  // once render is called lifecycle methods of other conatainers
  // would be called.
  // on call to render react creates a virtual dom and render it
  // to actual dom on browser. on update while rerendering react
  // again prepare a virtual dom and only render the diffs with
  // previous dom on actual browser dom thus improving performance
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
        <button
          ref={this.topButton}
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show family members
        </button>
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
        <Cockpit
          title={this.props.title}
          toggle={this.toggleHandler}
          shuffle={this.personShuffleHandler}
        />
      </div>
    );

    // below code is same as above JSX. JSX behind the
    // scene coverted to below js code that's why we need to
    // import React even not used explicitely.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Learning react'));
    // since jsx is compiled to js we can't use class of html
    // class is a valid js keyword.
  }

  // cause side-effects
  componentDidMount() {
    console.log("[App.js] inside componet did mount");
    // references can be used only with stateful components
    // we can use for focus/ media playback but we shouldn't
    // use it for styling
    this.topButton.current.focus();
  }

  // cause side-effects
  componentDidUpdate() {
    // called after render() is comleted after update
    console.log("App.js inside component did mount");
  }
}

export default App;
