import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // special property since extends Component
  // chanfe of state would lead to rerendeing of dom
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: 'tuk',  hobbies: 'no hobbies'},
        {name: 'sid'}
      ],
      otherState: "other state"
    }

    this.switchNameHandler = this.switchNameHandler.bind(this);
  }

  switchNameHandler = () => {
    console.log('switch clicked');
    // changing state directly has no effect
    const persons = [...this.state.persons];

    // only update and merge for defined properties
    this.setState({persons});
  }

  // two way binding
  nameChangeHandler = (event) => {
    const persons = this.state.persons.map(person => {
      person.name = event.target.value
      return person
    });
    this.setState({persons});
  }

  // render hml to dom
  render(){
    // changing state or props cause a rerender, update the virtual dom and
    // update actual dom only for  the diff.
    console.log('render called...');
    const style = {
      border: '1px blue solid'
    }

    return (
      <div className="App">
        <h1>hi</h1>
        {/* passing name attribute to person */}
        {this.state.persons.map((person, index) => 
          <Person 
            key={index} 
            name={person.name}
            click={this.switchNameHandler}
            change={this.nameChangeHandler}
          >
            {person.hobbies}
          </Person>)
        }
        {/* this.switchNameHandler() would immediately run the function on render */}
        {/* (name) => this.switchNameHandler(name) return anonymous function on each
          render thus causing rerending of child components. In that way bind syntax
          is favourable. */}
        <button
          style={style}
          onClick={this.switchNameHandler} 
        >
          Switch
        </button>
      </div>
    );
  // jsx lets you embed js inside html
  // under the hood jsx compiled to js like below code
  // since class is a js keyword we need to use className
  // <h1>, <div> is defined by react
  // args: element to be rendered, configuaration, childrens
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, ...'))
  }
}

export default App;
