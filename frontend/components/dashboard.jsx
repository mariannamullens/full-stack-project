import React from 'react';
import HeaderContainer from './header_container';
import LeftNav from './left_nav';
import MiddleDash from './middle_dash';
import RightPanel from './right_panel';

const Dashboard = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="dashboard">
        <LeftNav />
        <MiddleDash />
        <RightPanel />
      </div>
    </div>
  )
}

export default Dashboard;