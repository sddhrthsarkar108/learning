import React from "react";

const cockpit = props => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue"
  };

  return (
    <div>
      <h1>Learning react</h1>
      <p>jsx paragraph</p>
      <button onClick={props.toggle}>Toogle</button>
      <button style={style} onClick={props.shuffle}>
        Shuffle
      </button>
    </div>
  );
};

export default cockpit;
