import React from 'react';

class MiddleDashHeader extends React.Component {
  render() {
    let { totalBalance, oweAmount, owedAmount } = this.props
    return (
      <div className="middle-dash-header">
        <h2>Dashboard</h2>
        <h2>total balance: {totalBalance}</h2>
        <h2>you owe: {oweAmount}</h2>
        <h2>you are owed: {owedAmount}</h2>
      </div>
    )
  }
};

export default MiddleDashHeader;