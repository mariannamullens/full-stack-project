import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentBillIdReducer from './current_bill_id_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentBillId: currentBillIdReducer,
});

export default uiReducer;