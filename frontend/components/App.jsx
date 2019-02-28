import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header_container';
import SignupFormContainer from './session_forms/signup_form_container'
import Splash from './splash/splash';

const App = () => (
  <div>
    <Switch>
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;