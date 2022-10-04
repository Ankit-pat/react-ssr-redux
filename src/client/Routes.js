import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage, {loadData} from './pages/UsersListPage';

export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        loadData: loadData,
        path: '/users',
        component: UsersListPage,
        exact: true
    }
]

//https://react-ssr-api.herokuapp.com