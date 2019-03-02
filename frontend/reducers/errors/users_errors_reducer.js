import { RECEIVE_USER_ERRORS } from '../../actions/users_actions';
import { CLEAR_ERRORS } from '../../actions/session_actions';

const usersErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default usersErrorsReducer;