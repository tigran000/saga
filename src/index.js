import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import { getUserRequest } from './actions';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './App';
import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(rootSaga);

if (localStorage.getItem('token')) {
    store.dispatch(getUserRequest())
}

render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();