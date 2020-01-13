import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './Services/auth';

import SignIn from './Views/SignIn';

import SignUp from './Views/SingUp'

import Values from './Views/Values'

const PrivateRoute = ({ component: Component, ...rest }) =>(
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
        <PrivateRoute exact path='/app' component={() => <h1>App</h1>}/>
            <Route path='/SignIn' component={SignIn}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path='/Valores' component={Values}/>


        </Switch>
    </BrowserRouter>
)

export default Routes;