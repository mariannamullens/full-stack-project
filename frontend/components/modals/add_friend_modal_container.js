import { connect } from 'react-redux';
import AddFriendModal from './add_friend_modal';
import { createFriend } from '../../actions/friends_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createFriend: friend => dispatch(createFriend(friend)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendModal);