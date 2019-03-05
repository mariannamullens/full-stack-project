import React from 'react';
import MiddleDashHeaderContainer from './middle_dash_header_container';
import OweIndexContainer from './owe_index_container';
import OwedIndexContainer from './owed_index_container';

class MiddleDash extends React.Component {
  render() {
    return (
      <div className="middle-dash">
        <MiddleDashHeaderContainer />
        <div className="middle-dash-body">
          <OweIndexContainer />
          <OwedIndexContainer />
        </div>
      </div>
    )
  }
};

export default MiddleDash;