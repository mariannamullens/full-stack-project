import React from 'react';
import ExpensesIndexItemDetail from './expenses_index_item_detail';

class ExpensesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showDetail: false };
    this.openDetail = this.openDetail.bind(this);
  }

  openDetail () {
    let { bill, setCurrentBillId, clearCurrentBillId } = this.props;

    this.setState((state) => ({ showDetail: !state.showDetail }), () => {
      this.state.showDetail ? setCurrentBillId(bill.id) : clearCurrentBillId();
    });

  }
  
  render() {
    let { 
      createdAtMonth,
      createdAtDay,
      description,
      lentBorrowedContext,
      amount,
      id
     } = this.props.bill;

    return (
      <div>
        <div className="expense-summary" onClick={this.openDetail}>
          <div className="date">
            <h2 className="month">{createdAtMonth}</h2>
            <h2 className="day">{createdAtDay}</h2>
          </div>
          <h3>{description}</h3>
          <div className="paid">
            <h5>{lentBorrowedContext.paidText}</h5>
            <h4>{amount}</h4>
          </div>
          <div className="lent">
            <h5>{lentBorrowedContext.text}</h5>
            <h4>{lentBorrowedContext.amount}</h4>
          </div>
          <button onClick={() => this.props.deleteBill(id)}>X</button>
        </div>
        <ExpensesIndexItemDetail 
          showDetail={this.state.showDetail}
          updateBill={this.props.updateBill}
          bill={this.props.bill}
        />
      </div>
    );
  };
};

export default ExpensesIndexItem;