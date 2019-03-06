import React from 'react';

const ExpensesIndexItemDetail = props => {
  if (!props.showDetail) {
    return null;
  } else {
    return (
      <div>A thing that will appear when a button is clicked!</div>
    )
  }
};

export default ExpensesIndexItemDetail;