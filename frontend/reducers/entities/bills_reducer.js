import { 
  RECEIVE_BILL,
  REMOVE_BILL
} from '../../actions/bills_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const billsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.bills ? action.bills : {};
    case REMOVE_BILL:
      delete newState[action.billId];
      return newState;
    case RECEIVE_BILL:
      newState[action.billId] = action.bills[action.billId];
      return newState;
    default:
      return oldState;
  }
};

export default billsReducer;