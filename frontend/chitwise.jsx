import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchUser } from './actions/users_actions';
import { login } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TOFIX: TEST
    window.getState = store.getState;
    window.fetchUser = fetchUser;
    window.login = login;
    window.dispatch = store.dispatch;
  // testing

  ReactDOM.render(<Root store={store} />, root)
});