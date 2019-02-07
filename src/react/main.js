import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';

const store = createStore(reducers);
const el = document.getElementById('react-root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    el);