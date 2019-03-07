import React from 'react';

class AddBillUsersSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      searchStr: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
  }

  filteredFriends () {
    return this.props.friends.filter( friend => friend.name.toLowerCase().includes(this.state.searchStr))
  }

  handleInput(e) {
    this.setState(
      { searchStr: e.target.value },
      () => {
        if (this.state.searchStr === "") {
          this.setState({ showDropdown: false });
        } else {
          this.setState({ showDropdown: true });
        }
      }
    );
  }

  handleDropdownClick(friend) {
    return (e) => {
      this.setState({ searchStr: "", showDropdown: false });
      this.props.addAssociatedFriend(friend);
    }
  }

  render () {
    let associatedFriends = this.props.associatedFriends.map( friend => (
      <li key={friend.id}>
        {friend.name}
      </li>
    ))

    return (
    <div className="associated-input">
      <div className="associated-list">
        <h3>With <b>you</b> and:</h3>
        <ul>
          {associatedFriends}
        </ul>

        <input 
          onChange={this.handleInput}
          value={this.state.searchStr}
          placeholder="Enter names"
        />
      </div>

      <UserDropdown 
        showDropdown={this.state.showDropdown}
        filteredFriends={this.filteredFriends()}
        handleDropdownClick={this.handleDropdownClick}
      />
    </div>
    )
  }
}

const UserDropdown = props => {
  if (!props.showDropdown) {
    return null;
  } else {
    let friends = props.filteredFriends.map( friend => (
      <button 
        onClick={props.handleDropdownClick(friend)}
        className="association-button"
        key={friend.id}
      >
        {friend.name}
      </button>
    ));
    
    return (
      <ul className="associated-dropdown">{friends}</ul>
    )
  }
}

export default AddBillUsersSelector;