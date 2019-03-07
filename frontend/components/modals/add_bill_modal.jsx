import React from 'react';
import AddBillUsersSelector from './add_bill_users_selector';

class AddBillModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      amount: "",
      note: "",
      payer_id: "",
      shares: [],
      associatedFriends: []
    };

    this.addAssociatedFriend = this.addAssociatedFriend.bind(this);
  }

  addAssociatedFriend(friend) {
    return () => {
      if (!this.state.associatedFriends.includes(friend)) {
        let newArr = [...this.state.associatedFriends, friend];
        this.setState({ associatedFriends: newArr });
      }
    };
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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
            
          </div>
        </form>
      </div>
    );
  }
}

export default AddBillModal;