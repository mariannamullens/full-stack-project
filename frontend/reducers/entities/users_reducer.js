import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_FRIEND } from '../../actions/friends_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // newState[action.user.id] = action.user;
      return action.users;
      // return newState;
    case RECEIVE_FRIEND:
      newState[action.friendId] = action.userInfo;
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;