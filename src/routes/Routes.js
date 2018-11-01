import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {AuthRoute} from '../routes/AuthRoute';

// Components.
import Error404 from '../components/Error404/Error404';
import LoginPage from '../containers/LoginPage/LoginPage';

// Containers.
import HomePage from '../containers/HomePage/HomePage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <AuthRoute exact path="/" component={HomePage} />
            <AuthRoute component={Error404} />
        </Switch>
    )
}

export default Routes;