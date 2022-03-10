import React from 'react';
import Option from './Option';

export default (props) => (
  <div>
    <button className="button button--link" onClick={props.handleRemoveAll}>
      Remove All
    </button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}

    {props.options.map((option) => (
      <Option
        key={option}
        option={option}
        handleRemoveOne={props.handleRemoveOne}
      />
    ))}
  </div>
);
