import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { createFriend } from '../../actions/friends_actions';
import { selectFriends } from '../../reducers/entities/friends_selector';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = state => ({
  friends: selectFriends(state),
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  createFriend: friend => dispatch(createFriend(friend)),
  fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);