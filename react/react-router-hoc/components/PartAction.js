import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPart } from '../actions/part';

class PartAction extends Component {
    state = {
        partNumber: 1
    }

    render() {
        const { addPart } = this.props;

        return (
            <button
                onMouseLeave={() => this.setState({ partNumber: ++this.state.partNumber })}
                onClick={() => addPart({ name: `p${this.state.partNumber}`, desc: `p${this.state.partNumber} desc` })}>
                Add
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addPart: part => dispatch(addPart(part))
})

export default connect(
    null,
    mapDispatchToProps
)(PartAction);
