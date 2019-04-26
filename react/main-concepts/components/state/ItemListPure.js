import React, { PureComponent } from 'react';

class ItemListPure extends PureComponent {
    render() {
        console.log('render pure itemlist...');
        return (
            <ul>
                {this.props.items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        );
    }
}

export default ItemListPure;