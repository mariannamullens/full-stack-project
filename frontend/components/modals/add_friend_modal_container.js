import { connect } from 'react-redux';
import AddFriendModal from './add_friend_modal';
import { createFriend } from '../../actions/friends_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createFriend: friend => dispatch(createFriend(friend)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendModal);