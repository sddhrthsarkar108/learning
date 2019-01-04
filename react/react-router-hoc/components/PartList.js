import React from 'react';
import { connect } from 'react-redux';

import Part from '../components/Part';
import { deletePart } from '../actions/part';

const PartList = (props) => {
    const { parts, deletePart } = props;

    return (
        <>
            {parts.map(part => <Part onClick={() => deletePart(part)} key={part.name} name={part.name} desc={part.desc} />)}
        </>
    );
}

const mapStateToProps = state => ({
    parts: state.parts
})

const mapDispatchToProps = dispatch => ({
    deletePart: part => dispatch(deletePart(part))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PartList);
