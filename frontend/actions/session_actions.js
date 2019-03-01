import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = user => dispatch => {
  return ApiUtil.login(user)
    .then( 
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const signup = user => dispatch => {
  return ApiUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const logout = () => dispatch => {
  return ApiUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      errors => dispatch(receiveErrors(errors))
    );
};

const receiveCurrentUser = ({users, session}) => ({
  type: RECEIVE_CURRENT_USER,
  user: users[session.currentUserId]
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});