import React, {Component} from 'react';
import PartList from '../components/PartList'

class App extends Component {
    render() {
        return (
        <div>
            <h1>{'Parts list: '}</h1>
            <PartList/>
        </div>
        )
    }
}

export default App;