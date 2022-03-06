import React from 'react';

export default (props) => (
  <li>
    {props.option}
    <button onClick={(e) => props.handleRemoveOne(props.option)}>remove</button>
  </li>
);
