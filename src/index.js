import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { checkToken } from './actions/index';

const store = createStore(reducers, applyMiddleware(reduxThunk));

store.dispatch(checkToken(localStorage.getItem('token')));

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
