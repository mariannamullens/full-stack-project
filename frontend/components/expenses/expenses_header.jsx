import React from 'react';
import AddBill from './add_bill';

const ExpensesHeader = props => {
  return (
    <div className="expenses-header">
      <h2>All expenses</h2>
      <AddBill />
    </div>
  )
}

export default ExpensesHeader;