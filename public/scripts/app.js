'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'resr'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Charlotte Zhang'
  ),
  React.createElement(
    'p',
    null,
    'Age: 29'
  ),
  React.createElement(
    'p',
    null,
    'Location: New Taipei City'
  )
);

var appRoot = document.querySelector('#main');

ReactDOM.render(templateTwo, appRoot);
