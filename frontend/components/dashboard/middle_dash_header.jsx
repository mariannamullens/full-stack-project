import React from 'react';
import AddBill from '../expenses/add_bill';

class MiddleDashHeader extends React.Component {
  render() {
    let { totalBalance, oweAmount, owedAmount } = this.props
    return (
      <div className="middle-dash-header">
        <div className="upper-header">
          <h2>Dashboard</h2>
          <AddBill />
        </div>
        <div className="aggregates">
          <div className="aggregate-type">
            <h3>total balance:</h3> 
            <h4>{totalBalance}</h4>
          </div>

          <div className="aggregate-type border">
            <h3>you owe:</h3> 
            <h4>{oweAmount}</h4>
          </div>

          <div className="aggregate-type green">
            <h3>you are owed:</h3> 
            <h4>{owedAmount}</h4>
          </div>
        </div>
      </div>
    )
  }
};

export default MiddleDashHeader;