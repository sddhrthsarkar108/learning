import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// essentially react gives us a way to write custom html components
// we can replace <App/> with any html tag
// typically in a react app we render one root component
// then nest other components in root component like App component here
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
