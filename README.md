# CHITWISE

Chitwise is a clone of the bill sharing app [Splitwise](https://secure.splitwise.com/) built using Rails, PostgreSQL, React and Redux. Chitwise allows you to share bills with friends and calculates a running total per friend so you don't have to keep track of individual bill amounts.

Visit Chitwise's [live site](https://chitwise.herokuapp.com/).

![dashboard screenshot](https://github.com/mariannamullens/full-stack-project/blob/master/app/assets/images/readme_screenshot.png)

## Features

* Secure frontend to backend user auth using BCrypt
* Add and view friends, and add friends to bills
* Add bills and view bill summary and details
* View aggregate totals per friend on Dashboard

Chitwise was built in ten days. I prioritized a compact feature set over feature sprawl, but there's a ton of interesting features yet to implement. Those can be found in the feature backlog below.

## Coding joys and challenges

Because this was my first full stack project, I learned a tremendous amount while developing Chitwise. Some of my favorite moments were small victories, or challenges that compelled me (and continue to compel me) towards additional research. 

### A more friendly bill

When it came time to work with each bill's detail, the information pulled from my Redux state wasn't quite as friendly as I'd like. I decided to make a `readableBill` function (nested in a bill selector), creating an API for my bill. In my component, I could pull things like created at month and day, allowing for more modular use.

```
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
```
`readableBill` relied on `lentBorrwedContext` for conditional text rendering, depending on who paid the bill, and who owed for the bill.

```
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
```

![conditional rendering](https://github.com/mariannamullens/full-stack-project/blob/master/app/assets/images/readme_conditional.png)

### Danger Decimals

During the project I was hyperaware of the dangers of decimal precision when it came to monetary calculations:

![float calculation](https://github.com/mariannamullens/full-stack-project/blob/master/app/assets/images/float_calculation.png)

 I relied on the decimal datatype in my PostgreSQL database (which ActiveRecord converts to BigDecimal to maintain precision), and used [decimal.js](https://github.com/MikeMcl/decimal.js/) for my frontend calculations. I look forward to researching a more comprehensive solution for decimal and monetary handling, hopefully one that doesn't rely on .toFixed(2) on the frontend!

## Feature Backlog

There's never enough time for all the features we want. However, here's what's on deck:

* View bills filtered by friend
* Edit bills
* Delete friends
* Bill comments