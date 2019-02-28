import React from 'react';
// import { Router, Link } from 'react-router-dom';
import HeaderContainer from '../header_container';
import SplashBody from './splash_body';
import SplashFooter from './splash_footer';

const Splash = () => {
  return (
    <div className="splash">
    <HeaderContainer />
    <SplashBody />
    <SplashFooter />
    </div>
  )
}

export default Splash;