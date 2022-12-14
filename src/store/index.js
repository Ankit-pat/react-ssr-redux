import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(
    reducers,
    window.INITIAL_STATE, 
    applyMiddleware(thunk)
)