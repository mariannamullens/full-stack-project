import { connect } from 'react-redux';
import React from 'react';
import { owedFriends } from '../../reducers/balance_aggregates_selector';

const OwedIndex = props => {
  let owedFriends = props.owedFriends.map(friendObj => (
    <OwedIndexItem
      friendObj={friendObj}
      key={friendObj.friend.id}
    />
  ));

  return (
    <div className="owed-index">
    <header>
      <h2>You are owed</h2>
    </header>
    <ul>
      {owedFriends}
    </ul>
    </div>
    );
  };
  
const OwedIndexItem = props => {
  return (
    <div className="owed-index-item">
      <img className="round-icon" src={window.images.cactus} />
      <ul>
        <li className="name">{props.friendObj.friend.name}</li>
        <li className="amount">owes you ${props.friendObj.amount}</li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  owedFriends: owedFriends(state),
});

export default connect(mapStateToProps)(OwedIndex)