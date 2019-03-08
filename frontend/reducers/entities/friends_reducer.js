import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_FRIEND } from '../../actions/friends_actions';

const friendsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.friends ? action.friends : {};
    case RECEIVE_FRIEND:
      return Object.assign({}, newState, action.friendInfo);
    default:
      return oldState;
  }
};

export default friendsReducer;