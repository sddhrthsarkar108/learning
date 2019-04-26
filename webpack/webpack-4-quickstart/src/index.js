import App from "./App";
import ReactDOM from 'react-dom';
import React from 'react';

const jsInES6 = () => console.log(...[1, 2, 3]);
jsInES6();

ReactDOM.render(<App />, document.getElementById("app"));