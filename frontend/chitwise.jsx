import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { createFriend } from './actions/friends_actions';
import { login } from './actions/session_actions';
// import { receiveFriend } from './actions/friends_actions';
import { selectFriends } from './reducers/entities/friends_selector';

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
    // window.createFriend = createFriend;
    window.login = login;
    window.dispatch = store.dispatch;
    window.selectFriends = selectFriends;
    // window.receiveFriend = receiveFriend;
  // testing

  ReactDOM.render(<Root store={store} />, root)
});