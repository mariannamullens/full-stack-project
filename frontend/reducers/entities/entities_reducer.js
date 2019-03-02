import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  friends: friendsReducer,
});

export default entitiesReducer;