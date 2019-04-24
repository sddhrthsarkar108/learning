import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function getApp() {
    console.log("Rendering app in container...");
    // appliaction mount once
    return <App/>;
} 

ReactDOM.render(
    getApp(), 
    document.getElementById("root")
);

