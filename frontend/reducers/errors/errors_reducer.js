import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import friendsErrorsReducer from './friends_errors_reducer';
import usersErrorsReducer from './users_errors_reducer';
import billsErrorsReducer from './bills_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  friends: friendsErrorsReducer,
  users: usersErrorsReducer,
  bills: billsErrorsReducer
});

export default errorsReducer;