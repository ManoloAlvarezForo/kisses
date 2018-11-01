import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from '../utils/constans/Communication'
import WithMain from '../hoc/WithMain';

function isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN) ? true : false;
}

// function isAuthenticated() {
//     return true;
// }

export const AuthRoute = ({ component: Component, ...rest }) => {
    const Main = WithMain(Component);
    return (
        <Route {...rest} render={() => (
            isAuthenticated() === true
                ? <Main />
                : <Redirect to="/login" />
        )} />
    )
}
