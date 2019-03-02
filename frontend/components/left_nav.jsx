import React from 'react';
import FriendsIndexContainer from './friends/friends_index_container';

class LeftNav extends React.Component {
  render() {
    return (
      <div className="left-nav">
        <FriendsIndexContainer />
      </div>
    )
  }
};

export default LeftNav;