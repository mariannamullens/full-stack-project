import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => {
  ApiUtil.login(user)
    .then( 
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const signup = user => dispatch => {
  ApiUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const logout = () => dispatch => {
  ApiUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      errors => dispatch(receiveErrors(errors))
    );
};

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});