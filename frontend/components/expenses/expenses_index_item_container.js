import { connect } from 'react-redux';
import ExpensesIndexItem from './expenses_index_item';
import { readableBill } from '../../reducers/entities/bills_selector';
import { deleteBill, clearCurrentBillId, setCurrentBillId } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps ) => ({
  bill: readableBill(ownProps.bill, state)
});

const mapDispatchToProps = dispatch => ({
  deleteBill: id => dispatch(deleteBill(id)),
  setCurrentBillId: id => dispatch(setCurrentBillId(id)),
  clearCurrentBillId: () => dispatch(clearCurrentBillId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesIndexItem);