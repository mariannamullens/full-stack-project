export const selectFriends = ({entities: {users, friends}}) => {
  console.log(users)
  console.log(friends)
  let associations = Object.values(friends);
  return associations.map(association => users[association.friendId]);
};