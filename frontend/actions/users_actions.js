import * as ApiUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';

export const fetchUser = id => dispatch => {
  return ApiUtil.fetchUser(id)
    .then(
      payload => dispatch(receiveCurrentUser(payload)),
      errors => dispatch(receiveErrors(errors))
    );
};