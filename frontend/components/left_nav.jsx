import React from 'react';
import FriendsIndexContainer from './friends/friends_index_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LeftNav extends React.Component {

  render() {
    let onAll = this.props.location.pathname === "/all" ? "color" : "";
    let onDash = this.props.location.pathname === "/dashboard" ? "color" : "";

    return (
      <div className="left-nav">
        <div className={`dash-link ${onDash}`}>
          <Link to="/dashboard" className="router-link">
            <img src={window.images.banana} />
            Dashboard
          </Link>
        </div>
        <div className={`expenses-link ${onAll}`}>
          <Link to="/all" className="router-link">
            <i className="fas fa-list-ul"></i>
            All expenses
          </Link>
        </div>
        <FriendsIndexContainer />
      </div>
    )
  }
};

export default withRouter(LeftNav);