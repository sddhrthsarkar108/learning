import React, { Component } from 'react';
import FancyButton from './FancyButton';

class BottonHolder extends Component {
    ref = React.createRef();

    render() {
        return (
            <>
                <div ref={this.ref}>Button holder div</div>
                <FancyButton ref={this.ref}>Fancy Button</FancyButton>
            </>
        )
    }
}

export default BottonHolder;