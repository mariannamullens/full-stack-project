import React from 'react';
import ExpensesHeader from './expenses_header';
import ExpensesIndexContainer from './expenses_index_container';

class MiddleExpenses extends React.Component {
  render() {
    return (
      <div className="middle-expenses">
        <ExpensesHeader />
        <ExpensesIndexContainer />
      </div>
    )
  }
};

export default MiddleExpenses;