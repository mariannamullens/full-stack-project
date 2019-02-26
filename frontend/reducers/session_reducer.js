import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = {
  currentUserId: null
};

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUserId = action.user.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  }
};

export default sessionReducer;