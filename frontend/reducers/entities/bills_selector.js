import { Decimal } from 'decimal.js';

export const readableBill = (bill, state) => {
  let friendlyBill = Object.assign(bill);
  let friendlyCreatedAt = new Date(bill.createdAt);

  friendlyBill.createdAtMonth = friendlyCreatedAt.toLocaleString('en-us', { month: 'short' });
  friendlyBill.createdAtDay = friendlyCreatedAt.getDate();
  friendlyBill.createdAtYear = friendlyCreatedAt.getFullYear();
  friendlyBill.payer = state.entities.users[bill.payerId];
  friendlyBill.shares = readableShares(bill, state);
  friendlyBill.creator = state.entities.users[bill.creatorId];
  friendlyBill.amount = new Decimal(friendlyBill.amount).toFixed(2);
  friendlyBill.lentBorrowedContext = lentBorrowedContext(bill, state);

  return friendlyBill;
};

export const readableShares = (bill, { entities: { userBillShares, users }}) => {
  let billShares = Object.values(userBillShares).filter( share => share.billId === bill.id );
  billShares.forEach( share => {
    share.user = users[share.userId]
    share.amount = new Decimal(share.amount).toFixed(2);
  });
  return billShares;
};

export const lentBorrowedContext = (bill, state) => {
  let context = { text: "", amount: "", paidText: "" };

  if (bill.payerId === state.session.currentUserId) {
    context.text = "you lent";
    context.amount = currentUserLent(bill, state);
    context.paidText = "you paid";
    context.shareText = `You paid ${bill.amount} and owe ${currentUserShare(bill, state)}`;
  } else {
    context.text = `you borrowed`;
    context.amount = currentUserShare(bill, state);
    context.paidText = `${state.entities.users[bill.payerId].name} paid`;
    context.shareText = `${state.entities.users[bill.payerId].name} paid ${bill.amount} and owes ${otherUserShare(bill, state, bill.payerId)}`;
  }
  
  return context;
};

export const currentUserShare = (bill, state) => {
  let objArr = readableShares(bill, state).filter(share => share.userId === state.session.currentUserId)
  return objArr[0] ? objArr[0].amount : "0.00";
};

export const otherUserShare = (bill, state, id) => {
  let objArr = readableShares(bill, state).filter(share => share.userId === id);
  return objArr[0] ? objArr[0].amount : "0.00";
};

export const currentUserLent = (bill, state) => {
  let share = new Decimal(currentUserShare(bill, state));
  return (bill.amount - share).toFixed(2);
};

export const friendBills = (state, id) => {
  let readableBillsArr = [];
  Object.values(state.entities.bills).forEach( bill => {
    let friendlyBill = readableBill(bill, state);
    if (friendlyBill.creator.id === id || friendlyBill.payer.id === id) {
      readableBillsArr.push(bill);
      return;
    }
    friendlyBill.shares.forEach( share => {
      if (share.userId === id) {
        readableBillsArr.push(bill);
        return;
      }
    });
  });
  return readableBillsArr;
};