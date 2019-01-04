import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './containers/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

// intregration point with redux router
// use HashRouter for static file server or use BrowserRouter
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path='/' component={App} />
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);
