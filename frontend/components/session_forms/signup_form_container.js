import { connect } from 'react-redux';
import SignupForm from './sigup_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: Array.from(new Set(state.errors.session))
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);