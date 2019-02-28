import React from 'react';

const ErrorsIndex = (props) => {
  const errors = props.errors.map(error => <li>{error}</li>)

  return (
    <div className="errors">
      <h2>The following errors occurred:</h2>
      <ul>{errors}</ul>
    </div>
  )
}

export default ErrorsIndex;