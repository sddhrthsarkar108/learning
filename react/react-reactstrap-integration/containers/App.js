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
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <>
                <Button id="PopoverFocus" type="button" onClick={this.toggle}>Launch Popover</Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="PopoverFocus">
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Sed posuere consectetur est at lobortis.</PopoverBody>
                </Popover>
            </>
        );
    }
}

export default App;