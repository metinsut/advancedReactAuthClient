import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

ReactDom.render(
    <Provider store={createStore(reducers, {})}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
