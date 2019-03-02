import * as ApiUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const fetchUser = id => dispatch => {
  return ApiUtil.fetchUser(id)
    .then(
      payload => dispatch(receiveCurrentUser(payload)),
      errors => dispatch(receiveUserErrors(errors))
    );
};

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors: errors.responseJSON
  };
};