import React from 'react';
import Option from './Option';

export default (props) => (
  <div>
    <button onClick={props.handleRemoveAll}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    <ul>
      {props.options.map((option) => {
        return (
          <Option
            key={option}
            option={option}
            handleRemoveOne={props.handleRemoveOne}
          />
        );
      })}
    </ul>
  </div>
);
