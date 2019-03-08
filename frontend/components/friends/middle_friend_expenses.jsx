// stretch goal: not implemented

import React from 'react';
import ExpensesHeader from '../expenses/expenses_header';
import FriendExpenseIndexContainer from './friend_expense_index_container';

class MiddleFriendExpenses extends React.Component {
  render() {
    return (
      <div className="middle-expenses">
        <ExpensesHeader />
        <FriendExpenseIndexContainer friendId={this.props.friendId} />
      </div>
    )
  }
};

export default MiddleFriendExpenses;