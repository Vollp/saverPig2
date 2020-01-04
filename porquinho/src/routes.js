import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth'

import SignUp from './views/SignUp';

import SignIn from './views/SignIn';

import PageNotFound from './views/NotFound'

import Home from './views/Home'

const PrivateRoute = ({ component: Component, ...rest }) =>(
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...rest} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signIn' component={SignIn} />
            <Route  path='/signUp' component={SignUp} />
            <PrivateRoute path='/app' component={() => <h1>App</h1>} />
            <Route  path='*' component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;