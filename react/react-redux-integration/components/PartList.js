import React from 'react';
import {connect} from 'react-redux';

import Part from '../components/Part';
import {addPart, deletePart} from '../actions/part'

const PartList = ({parts, addPart, deletePart}) => {
    return (
        <div>
            {parts.map(part => <Part onClick={() => deletePart(part)} key={part.name} name={part.name} desc={part.desc}/>)}
            <button onClick={() => addPart({name: 'p3', desc: 'p3 desc'})}>Add</button>
        </div>
        );
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