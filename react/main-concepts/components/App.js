import React from 'react';
import State from './state/State';
import Lifecycle from './lifecycle/Lifecycle';
import Event from './events/Event';

const App = (props) => {

    // render gets called on state/props update
    return (
        <>
            <Lifecycle />
            <State />
            <Event />
        </>
    )
}

export default App;