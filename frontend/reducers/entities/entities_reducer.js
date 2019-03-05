import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import friendsReducer from './friends_reducer';
import billsReducer from './bills_reducer';
import userBillSharesReducer from './user_bill_shares_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  friends: friendsReducer,
  bills: billsReducer,
  userBillShares: userBillSharesReducer,
});

export default entitiesReducer;