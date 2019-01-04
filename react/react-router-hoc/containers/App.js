import React, { Component } from 'react';
import { Route } from "react-router-dom";

import PartList from "../components/PartList";
import PartAction from '../components/PartAction';

class App extends Component {
    render() {
        return (
            <div>
                <h1>{'Parts list: '}</h1>
                <Route path='/' component={PartList} />
                <Route path='/add' component={PartAction} />
            </div>
        )
    }
}

export default App;