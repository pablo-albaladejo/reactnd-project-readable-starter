import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './screens/Home/';

import registerServiceWorker from './registerServiceWorker';

//REDUX
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';

//LOGGER
//https://github.com/evgenyrodionov/redux-logger/issues/6
import { createLogger } from 'redux-logger'
const logger = createLogger({
    // ...options
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter
            //https://github.com/facebook/create-react-app/issues/2959
            basename={process.env.PUBLIC_URL}
        >
            <Home />
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
