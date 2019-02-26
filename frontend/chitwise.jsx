import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // TOFIX: TEST
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  // testing

  ReactDOM.render(<h1>Welcome to the party, pal</h1>, root)
});