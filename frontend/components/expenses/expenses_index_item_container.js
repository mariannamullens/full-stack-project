import React from 'react';
import { connect } from 'react-redux';
import ExpensesIndexItem from './expenses_index_item';
import { readableBill } from '../../reducers/entities/bills_selector';
import { deleteBill } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps ) => ({
  bill: readableBill(ownProps.bill, state)
});

const mapDispatchToProps = dispatch => ({
  deleteBill: id => dispatch(deleteBill(id)),
  updateBill: bill => dispatch(updateBill(bill)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesIndexItem);