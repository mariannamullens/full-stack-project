import React from 'react';
import FriendsIndexContainer from './friends/friends_index_container';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  render() {
    return (
      <div className="left-nav">
        <div className="dash-link">
          <Link to="/dashboard" className="router-link">
            <img src={window.images.banana} />
            Dashboard
          </Link>
        </div>
        <div className="expenses-link">
          <Link to="/all" className="router-link">
            <i class="fas fa-list-ul"></i>
            All expenses
          </Link>
        </div>
        <FriendsIndexContainer />
      </div>
    )
  }
};

export default LeftNav;