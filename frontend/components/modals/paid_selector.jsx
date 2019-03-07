import React from 'react';

const PaidSelector = props => {
  let associatedUsers = props.associatedUsers.map(user => (
    <button
      onClick={props.addPayerContext(user)}
      className="paid-button"
    >
      {user.name}
    </button>
  ));

  if (!props.openPaidSelector) {
    return null
  } else {
    return (
    <div className="second-modal">
      <header>Choose payer</header>
      <ul>{associatedUsers}</ul>
    </div>
    )
  }
}

export default PaidSelector;