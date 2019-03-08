// stretch goal, not implemented

import { ExpensesIndex } from '../expenses/expenses_index_container';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
  bills: friendBills(state, ownProps.friendId),
  };
};

export default connect(mapStateToProps)(ExpensesIndex);