import { connect } from 'react-redux';
import AddBillModal from './add_bill_modal';
import { updateBill } from '../../actions/bills_actions';
import { closeModal } from '../../actions/modal_actions';
import { selectFriends } from '../../reducers/entities/friends_selector';
import { associatedFriends } from '../../reducers/entities/bills_selector';

const mapStateToProps = (state) => {
  let bill = state.entities.bills[state.ui.currentBillId];

  return {
  friends: selectFriends(state),
  currentUser: state.entities.users[state.session.currentUserId],
  description: bill.description,
  amount: bill.amount,
  note: bill.note,
  payerId: bill.payerId,
  associatedFriends: associatedFriends(bill, state),
  payerName: state.entities.users[bill.payerId].name,
  id: state.ui.currentBillId,
}};

const mapDispatchToProps = dispatch => ({
  billAction: bill => dispatch(updateBill(bill)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBillModal);