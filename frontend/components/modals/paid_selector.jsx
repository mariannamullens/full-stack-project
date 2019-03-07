import React from 'react';

const PaidSelector = props => {
  if (!props.openPaidSelector) {
    return null
  } else {
    return (
    <div className="second-modal">
      <header>Choose payer</header>
    </div>
    )
  }
}

export default PaidSelector;