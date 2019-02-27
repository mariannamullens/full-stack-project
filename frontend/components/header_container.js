import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../actions/session_actions';

const mapStateToProps = ({entities, session}) => ({
  currentUser: entities.users[session.currentUserId],
  isLoggedOut: (session.currentUserId === undefined || session.currentUserId === null )
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);