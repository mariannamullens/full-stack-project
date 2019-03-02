import React from 'react';
import AddFriend from './add_friend';

class FriendsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
  }

  render() {
    const friends = this.props.friends.map( friend => (
      <FriendsIndexItem 
        friend={friend}
        key={friend.id} 
      />
    ));

    return (
      <div className="friends-index">
        <header>
          <h2>Friends</h2>
          <AddFriend />
        </header>

        <ul>{friends}</ul>
      </div>
    )
  }
};

const FriendsIndexItem = (props) => (
  <li className="friends-index-item">
    <i className="fas fa-user"></i>
    {props.friend.name}
  </li>
)

export default FriendsIndex;