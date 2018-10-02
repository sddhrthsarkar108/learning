import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = (props) => (
      // index is index of element in list
          // helpful to refer person element in list
          props.persons.map((person, index) => {
            // while rendering list of jsx component react expects
            // key attribute on component which uniquely identifies
            // the element in dom. without a key for any update react
            // would rerender whole list for any change which is very 
            // inefficient for long lists. index although unique should
            // not be used as key as mutatying the list would change the
            // index of existing items.
            return <ErrorBoundary key = {person.id}>
            <Person 
            // if we use say name as key then every time we type a letter
            // in input text field we'll loose focus since during rerendering
            // if react find a element with same key then it would reuse the 
            // view otherwise recreates the element hence looses focus.
            // key = {person.id}
            name={props.persons[index].name}
            age={props.persons[index].age}
            click={props.click}
            change={(event) => props.change(event, person.id)}>
            click to shuffle
            </Person>
            </ErrorBoundary>
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
  );

export default persons;