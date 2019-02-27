import React from 'react';

const ErrorsIndex = (props) => {
  const errors = props.errors.map(error => <li>{error}</li>)

  return (
    <ul>{errors}</ul>
  )
}

export default ErrorsIndex;