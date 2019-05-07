import React, { forwardRef } from 'react';

const clickHandler = (ref) => {
    ref.current.focus();
}

const FancyButton = forwardRef((props, ref) => (
    <button ref={ref} onClick={(e) => clickHandler(ref)} >
        {props.children}
    </button>
));

export default FancyButton;