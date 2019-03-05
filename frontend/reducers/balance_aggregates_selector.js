export const balancePerFriend = ({entities, balanceAggregates}) => {
  let friendIds = Object.keys(entities.friends);

  return friendIds.map(friendId => { 
    let oweAmt;
    let owedAmt;

    if (balanceAggregates.owe[friendId] === undefined) {
      oweAmt = 0;
    } else {
      oweAmt = balanceAggregates.owe[friendId].amount;
    }

    if (balanceAggregates.owed[friendId] === undefined ) {
      owedAmt = 0;
    } else {
      owedAmt = balanceAggregates.owed[friendId].amount;
    }

    return { friend: entities.users[friendId], amount: owedAmt - oweAmt };
  });
};

export const totalBalance = state => {
  return (owedAmount(state) - oweAmount(state)).toFixed(2);
};

export const owedAmount = state => {
  let total = 0;
  let owedFriends = balancePerFriend(state).filter( obj => obj.amount > 0 );

  owedFriends.forEach(friendHash => {
    total += friendHash.amount;
  });

  return total.toFixed(2);
};

export const oweAmount = state => {
  let total = 0;
  let oweFriends = balancePerFriend(state).filter(obj => obj.amount < 0);

  oweFriends.forEach(friendHash => {
    total += friendHash.amount;
  });

  return (-1 * total).toFixed(2);
};

export const oweFriends = state => {
  let oweArr = balancePerFriend(state).filter(obj => obj.amount < 0);

  oweArr.forEach( object => {
    object.amount = (-1 * object.amount).toFixed(2);
  });

  return oweArr;
};

export const owedFriends = state => {
  let owedArr =  balancePerFriend(state).filter(obj => obj.amount > 0);

  owedArr.forEach(object => {
    object.amount = object.amount.toFixed(2);
  });

  return owedArr;
};