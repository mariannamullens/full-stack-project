//stretch goal: not implemented

import React from 'react';
import HeaderContainer from '../header_container';
import LeftNav from '../left_nav';
import RightPanel from '../right_panel';
import MiddleFriendExpenses from './middle_friend_expenses';

const FriendExpenses = (props) => {
  return (
    <div>
      <HeaderContainer />
      <div className="expenses">
        <LeftNav />
        <MiddleFriendExpenses friendId={props.match.params.id}  />
        <RightPanel />
      </div>
    </div>
  )
}

export default FriendExpenses;