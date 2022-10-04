// entry point for browser
import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from '../store';
import { renderRoutes } from 'react-router-config';

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'))