import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = user => dispatch => {
  return ApiUtil.login(user)
    .then( 
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const signup = user => dispatch => {
  return ApiUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const logout = () => dispatch => {
  return ApiUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const receiveCurrentUser = ({users, session, friends, bills}) => {
  return {
  type: RECEIVE_CURRENT_USER,
  user: users[session.currentUserId],
  users,
  friends,
  bills
}};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => {
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
}};

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});