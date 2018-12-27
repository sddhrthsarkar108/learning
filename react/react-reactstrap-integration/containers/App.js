import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        console.log('**********************')
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <>
                <Button id="PopoverFocus" type="button">Launch Popover</Button>
                <Popover trigger="focus" placement="bottom" isOpen={this.state.popoverOpen} target="PopoverFocus" toggle={this.toggle}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Sed posuere consectetur est at lobortis.</PopoverBody>
                </Popover>
            </>
        );
    }
}

export default App;