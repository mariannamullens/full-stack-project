import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormContainer from './session_forms/signup_form_container'
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import Modal from './modals/modal';
import Expenses from './expenses/expenses';
// STRETCHGOAL import FriendExpenses from './friends/friend_expenses';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/all" component={Expenses} />
      {/* <ProtectedRoute path="/friends/:id" component={FriendExpenses} /> */}
      <AuthRoute exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;