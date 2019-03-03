import * as ApiUtil from '../util/friends_api_util';

export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERRORS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";

export const createFriend = friend => dispatch => {
  return ApiUtil.createFriend(friend)
    .then(
      friend => dispatch(receiveFriend(friend)),
      errors => dispatch(receiveFriendErrors(errors))
    );
};

export const receiveFriendErrors = errors => {
  console.log(errors)
  return {
    type: RECEIVE_FRIEND_ERRORS,
    errors: errors.responseJSON
  };
};

export const receiveFriend = ({users, friends, friendId, friendshipId}) => ({
  type: RECEIVE_FRIEND,
  userInfo: users[friendId],
  friendInfo: friends,
  friendId,
  friendshipId
});

