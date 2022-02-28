'use strict';

// my code
// const handleToggle = (e) => {
//   const buttonText = e.target.innerText;
//   const detail = e.target.nextSibling.innerText;
//   console.log(detail);
//   if (buttonText === 'Show details') {
//     e.target.innerText = 'Hide details';
//   } else {
//     e.target.innerText = 'Show details';
//   }
// };
var isVisible = false;

var handleToggle = function handleToggle() {
  isVisible = !isVisible;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: handleToggle },
      isVisible ? 'Hide details' : 'Show details'
    ),
    isVisible && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'show up'
      )
    ),
    React.createElement('p', null)
  );

  ReactDOM.render(template, document.querySelector('#main'));
};

render();
