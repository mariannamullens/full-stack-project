export const selectFriends = ({entities: {users, friends}}) => {
  let associations = Object.values(friends);
  return associations.map(association => users[association.friendId]);
};