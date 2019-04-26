import React, { Component } from 'react';
import ItemList from './ItemList';
import ItemListPure from './ItemListPure';
import ItemListWithLambdaInProps from './ItemListWithLambdaInProps';

class State extends Component {
    state = {
        items: []
    }

    constructor(props) {
        super(props);
        /* Can't call setState on a component that is not yet mounted. This is a no-op, 
        but it might indicate a bug in your application. Instead, assign to `this.state` directly */
        // this.setState(null);
    }

    nextItemId = 0;

    makeItem() {
        return {
            id: this.nextItemId++,
            value: Math.random()
        };
    }

    addItemImmutably = () => {
        this.setState({
            items: [...this.state.items, this.makeItem()]
        });

        /* 1. React intentionally “waits” until all components call setState() 
        in their event handlers before starting to re-render. This boosts 
        performance by avoiding unnecessary re-renders. Know that setState() 
        can be considered as a request instead of an immediate command to update 
        the component. This is why trying to use this.state immediately after a 
        setState() would lead to incorrect behaviors
           2.  */
        console.log(this.state.items); // returns [] when 1st item is added
    };

    addItemMutably = () => {
        let items = this.state.items;
        items.push(this.makeItem());
        this.setState({ items: items });
    };

    render() {
        /* The render() function should be pure, meaning that it does not modify 
        component state, it returns the same result each time it’s invoked, and 
        it does not directly interact with the browser. */
        // this.setState(null);

        return (
            <>
                <button onClick={this.addItemImmutably}>
                    Add item immutably (good)
                </button>
                <button onClick={this.addItemMutably}>Add item mutably (bad)</button>
                <div>normal: </div><ItemList items={this.state.items} />
                <hr />
                <span>pure: </span><ItemListPure items={this.state.items} />
                {/* although ItemListWithLambdaInProps is pure componet for every render new function would be
                passed to testProp making a rerender of ItemListWithLambdaInProps. 
                Thus Don’t bind values in functions in render */}
                <ItemListWithLambdaInProps testProp={() => { }} />
            </>
        )
    }
}

export default State;