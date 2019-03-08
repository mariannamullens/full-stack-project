// stretch goal, not implemented

import { ExpensesIndex } from '../expenses/expenses_index_container';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(friendBills(state, ownProps.friendId))
  console.log(ownProps.friendId);
  return {
  bills: friendBills(state, ownProps.friendId),
  };
};

export default connect(mapStateToProps)(ExpensesIndex);