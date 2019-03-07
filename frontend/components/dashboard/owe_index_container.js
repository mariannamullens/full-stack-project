import { connect } from 'react-redux';
import React from 'react';
import { oweFriends } from '../../reducers/balance_aggregates_selector';

const OweIndex = props => {
  let oweFriends = props.oweFriends.map( friendObj => (
    <OweIndexItem
      friendObj={friendObj}
      key={friendObj.friend.id} 
    />
  ));

  return (
    <div className="owe-index">
      <header>
        <h2>You owe</h2>
      </header>
      <ul>
        {oweFriends}
      </ul>
    </div>
  );
};

const OweIndexItem = props => {
  return (
    <div className="owe-index-item">
      <img className="round-icon" src={window.images.cactus} />
      <ul>
        <li className="name">{props.friendObj.friend.name}</li>
        <li className="amount">you owe ${props.friendObj.amount}</li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  oweFriends: oweFriends(state),
});

export default connect(mapStateToProps)(OweIndex)