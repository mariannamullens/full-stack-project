import React from 'react';

const SplashBody = () => {
  return (
    <div className="splash-body">
      <div className="splash-line-one">
        <img className="banana-logo" src={window.images.banana} />
        <h1>Split expenses with friends.</h1>
      </div>
      <div className="splash-line-two">
        <h2><strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web, iPhone, and Android.</h2>
      </div>
      <div className="splash-line-three">
        <img className="laptop" src={window.images.laptop} />
        <img className="mobile" src={window.images.mobile} />
      </div>
    </div>
  )
}

export default SplashBody;