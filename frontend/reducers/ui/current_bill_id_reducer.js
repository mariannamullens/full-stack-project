import { SET_CURRENT_BILL_ID, CLEAR_CURRENT_BILL_ID } from '../../actions/bills_actions';

const currentBillIdReducer = (oldState = null, action) => {
  switch (action.type) {
    case SET_CURRENT_BILL_ID:
      return action.billId;
    case CLEAR_CURRENT_BILL_ID:
      return null;
    default:
      return oldState;
  }
};

export default currentBillIdReducer;