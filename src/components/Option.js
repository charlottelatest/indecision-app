import React from 'react';

export default (props) => (
  <li>
    {props.option}
    <button onClick={props.handleRemoveOne}>remove</button>
  </li>
);
