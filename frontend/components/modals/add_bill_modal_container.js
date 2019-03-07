import { connect } from 'react-redux';
import AddBillModal from './add_bill_modal';
import { createBill } from '../../actions/bills_actions';
import { closeModal } from '../../actions/modal_actions';
import { selectFriends } from '../../reducers/entities/friends_selector';

const mapStateToProps = state => ({
  friends: selectFriends(state),
});

const mapDispatchToProps = dispatch => ({
  createBill: bill => dispatch(createBill(bill)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBillModal);