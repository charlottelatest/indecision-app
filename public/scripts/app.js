'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoToggle = function (_React$Component) {
  _inherits(InfoToggle, _React$Component);

  function InfoToggle(prop) {
    _classCallCheck(this, InfoToggle);

    var _this = _possibleConstructorReturn(this, (InfoToggle.__proto__ || Object.getPrototypeOf(InfoToggle)).call(this, prop));

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(InfoToggle, [{
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          isVisible: !prevState.isVisible
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'InforToggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggle },
          this.state.isVisible ? 'Hide detail' : 'Show detail'
        ),
        this.state.isVisible && React.createElement(
          'p',
          null,
          'the epic detail'
        )
      );
    }
  }]);

  return InfoToggle;
}(React.Component);

ReactDOM.render(React.createElement(InfoToggle, null), document.querySelector('#main'));

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

// my code after watching Andrew Mead
// let isVisible = false;

// const handleToggle = () => {
//   isVisible = !isVisible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={handleToggle}>
//         {isVisible ? 'Hide details' : 'Show details'}
//       </button>
//       {isVisible && (
//         <div>
//           <p>show up</p>
//         </div>
//       )}
//       <p></p>
//     </div>
//   );

//   ReactDOM.render(template, document.querySelector('#main'));
// };

// render();
