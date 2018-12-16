import React, {Component} from 'react';
import {connect} from 'react-redux';

import Part from '../components/Part';
import {addPart, deletePart} from '../actions/part'

class PartList extends Component {
    state = {
        partNumber: 0
    }

    render() {
        const {parts, addPart, deletePart} = this.props;

        return (
            <div>
                {parts.map(part => <Part onClick={() => deletePart(part)} key={part.name} name={part.name} desc={part.desc}/>)}
                <button onMouseLeave={() => this.setState({partNumber: ++this.state.partNumber})} onClick={() => addPart({name: `p${this.state.partNumber}`, desc: `p${this.state.partNumber} desc`})}>Add</button>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    parts: state.parts
})

const mapDispatchToProps = dispatch => ({
    addPart: part => dispatch(addPart(part)),
    deletePart: part => dispatch(deletePart(part))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PartList);