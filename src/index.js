import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(rootSaga)


if (localStorage.getItem('token')) {
  
    store.dispatch({type:'SET'})
}
render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();