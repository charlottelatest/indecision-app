'use strict';

var appProp = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['A', 'B', 'C']
};

var getOptions = function getOptions(options) {
  return options && options.length > 0 ? React.createElement(
    'p',
    null,
    'Here are your options: ',
    options.join(',')
  ) : 'No options';
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appProp.title ? appProp.title : 'Untitled App'
  ),
  appProp.subtitle && React.createElement(
    'p',
    null,
    appProp.subtitle
  ),
  getOptions(appProp.options)
);

ReactDOM.render(template, document.querySelector('#main'));
