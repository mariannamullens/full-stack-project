import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { createFriend } from '../../actions/friends_actions';
import { selectFriends } from '../../reducers/entities/friends_selector';

const mapStateToProps = state => ({
  friends: selectFriends(state),
});

const mapDispatchToProps = dispatch => ({
  createFriend: friend => dispatch(createFriend(friend)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);