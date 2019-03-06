import React from 'react';
import ExpenseIndexItemContainer from './expenses_index_item_container';
import { connect } from 'react-redux';

const ExpensesIndex = props => {
  const expenses = props.bills.map( bill => (
    <ExpenseIndexItemContainer
      bill={bill}
      key={bill.id}
    />
  ))
  return (
    <ul>{expenses}</ul>
  );
};

const mapStateToProps = ({ entities: { bills }}) => ({
  bills: Object.values(bills),
});

export default connect(mapStateToProps)(ExpensesIndex);