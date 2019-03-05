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

    return { friendId: friendId, amount: owedAmt - oweAmt };
  });
};

export const totalBalance = state => {
  return owedAmount(state) - oweAmount(state);
};

export const owedAmount = state => {
  let total = 0;
  let owedFriends = balancePerFriend(state).filter( obj => obj.amount > 0 );

  owedFriends.forEach(friendHash => {
    total += friendHash.amount;
  });

  return total;
};

export const oweAmount = state => {
  let total = 0;
  let oweFriends = balancePerFriend(state).filter(obj => obj.amount < 0);

  oweFriends.forEach(friendHash => {
    total += friendHash.amount;
  });

  return (-1 * total);
};