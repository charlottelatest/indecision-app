import React from 'react';

export default (props) => (
  <div>
    {props.option}
    <button
      className="button button--link"
      onClick={(e) => props.handleRemoveOne(props.option)}
    >
      remove
    </button>
  </div>
);
