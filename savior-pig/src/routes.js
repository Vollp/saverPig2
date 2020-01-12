import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './Services/auth';

import SignIn from './Views/SignIn';

import SignUp from './Views/SingUp'

const PrivateRoute = ({ Component: Component, ...rest }) =>(
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...rest} /> 
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }}  />
                )
        }
    /> 
);

const Routes = () =>(
    <BrowserRouter>
        <Switch>
        <PrivateRoute path='/app' component={() => <h1>App</h1>} />
            <Route path='/SignIn' component={SignIn}/>
            <Route path='/SignUp' component={SignUp}/>

        </Switch>
    </BrowserRouter>
)

export default Routes;