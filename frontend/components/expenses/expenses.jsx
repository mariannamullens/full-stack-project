import React from 'react';
import HeaderContainer from '../header_container';
import LeftNav from '../left_nav';
import RightPanel from '../right_panel';
import MiddleExpenses from './middle_expenses';

const Expenses = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="expenses">
        <LeftNav />
        <MiddleExpenses />
        <RightPanel />
      </div>
    </div>
  )
}

export default Expenses;