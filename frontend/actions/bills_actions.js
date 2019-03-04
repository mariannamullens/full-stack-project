import * as ApiUtil from '../util/bills_api_util';

export const RECEIVE_BILL_ERRORS = "RECEIVE_BILL_ERRORS";
export const RECEIVE_BILL = "RECEIVE_BILL";
export const REMOVE_BILL = "REMOVE_BILL";

export const fetchBill = id => dispatch => {
  return ApiUtil.fetchBill(id)
    .then(
      payload => dispatch(receiveBill(payload)),
      errors => dispatch(receiveBillErrors(errors))
    );
};

export const deleteBill = id => dispatch => {
  return ApiUtil.deleteBill(id)
    .then(
      () => dispatch(removeBill(id)),
      errors => dispatch(receiveBillErrors(errors))
    );
};

export const createBill = bill => dispatch => {
  return ApiUtil.createBill(bill)
    .then(
      payload => dispatch(receiveBill(payload)),
      errors => dispatch(receiveBillErrors(errors))
    );
};

export const updateBill = bill => dispatch => {
  return ApiUtil.updateBill(bill)
    .then(
      payload => dispatch(receiveBill(payload)),
      errors => dispatch(receiveBillErrors(errors))
    );
};

const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
});

const removeBill = billId => ({
  type: REMOVE_BILL,
  billId
});

const receiveBillErrors = errors => ({
  type: RECEIVE_BILL_ERRORS,
  errors
});