import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from './header_container';
import SignupFormContainer from './session_forms/signup_form_container'
import Splash from './splash/splash';
import Dashboard from './dashboard';
import { ProtectedRoute, AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <AuthRoute exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;