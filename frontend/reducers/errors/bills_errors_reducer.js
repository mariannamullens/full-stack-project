import { RECEIVE_BILL_ERRORS } from '../../actions/bills_actions';
import { CLEAR_ERRORS } from '../../actions/session_actions';

const billsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BILL_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default billsErrorsReducer;