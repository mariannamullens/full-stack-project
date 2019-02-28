import { connect } from 'react-redux';
import SignupForm from './sigup_form';
import { signup } from '../../actions/session_actions'

const mapStateToProps = state => ({
  errors: Array.from(new Set(state.errors.session))
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);