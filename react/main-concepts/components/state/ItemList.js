import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        console.log('rendering itemlist...');
        return (
            <ul>
                {this.props.items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        );
    }
}

export default ItemList;