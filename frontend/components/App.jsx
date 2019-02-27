import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header_container';
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div>
    <Switch>
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/" component={HeaderContainer} />
    </Switch>
  </div>
);

export default App;