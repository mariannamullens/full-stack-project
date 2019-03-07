import React from 'react';
import AddBillUsersSelector from './add_bill_users_selector';
import PaidSelector from './paid_selector';

class AddBillModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      amount: "",
      note: "",
      payerId: this.props.currentUser.id,
      shares: [],
      associatedFriends: [],
      openPaidSelector: false,
      payerName: "you"
    };

    this.addAssociatedFriend = this.addAssociatedFriend.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addPayerContext = this.addPayerContext.bind(this);
  }

  addAssociatedFriend(friend) {
    return () => {
      if (!this.state.associatedFriends.includes(friend)) {
        let newArr = [...this.state.associatedFriends, friend];
        this.setState({ associatedFriends: newArr });
      }
    };
  }

  addPayerContext(user) {
    return () => {
      this.setState({ payerId: user.id, payerName: user.name });
    };
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ openPaidSelector: true });
  }

  render() {
    let { friends } = this.props;
    //who should pay => modal?
    // auto split equally
    return (
      <div className="modal-child bill">

        <header>Add a bill</header>

        <form >
          <AddBillUsersSelector 
            friends={friends}
            addAssociatedFriend={this.addAssociatedFriend}
            associatedFriends={this.state.associatedFriends}
          />
          
          <div className="middle-form">
            <div className="i-border"><i className="fas fa-receipt"></i></div>
            <div>
              <input 
                onChange={this.handleInput("description")}
                value={this.state.description}
                placeholder="Enter a description"
              />

              <label>$
                <input 
                  onChange={this.handleInput("amount")}
                  value={this.state.amount}
                  placeholder="0.00"
                />
              </label>
            </div>
          </div>

          <div className="form-split-context">
            <h4>
              Paid by
              <button onClick={this.handleClick}>
                {this.state.payerName}
              </button>
              and split
              <span className="green-text">
                equally
              </span>
            </h4>
          </div>

          <PaidSelector 
            openPaidSelector={this.state.openPaidSelector}
            associatedUsers={[...this.state.associatedFriends, this.props.currentUser]}
            addPayerContext={this.addPayerContext}
          />
        </form>
      </div>
    );
  }
}

export default AddBillModal;