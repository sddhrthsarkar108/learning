import React, { Fragment } from "react";
//import Aux from "../../hoc/Aux";

const cockpit = props => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue"
  };

  return (
    // by using higher order component Aux we can replace
    // div and still wrap adjacent html elements also we
    // avoid extra html element in dom also we can apply
    // styles to HOC
    //<Aux>
    <Fragment>
      <h1>Learning react</h1>
      <p>{props.title}</p>
      <button onClick={props.toggle}>Toogle</button>
      <button style={style} onClick={props.shuffle}>
        Shuffle
      </button>
      <button onClick={props.authenticate}>Login</button>
    </Fragment>
    // build in alternative of Aux hoc we created
    //</Aux>
  );
};

export default cockpit;
