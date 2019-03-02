import { RECEIVE_FRIEND_ERRORS } from '../../actions/friends_actions';
import { CLEAR_ERRORS} from '../../actions/session_actions';

const friendsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_FRIEND_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default friendsErrorsReducer;