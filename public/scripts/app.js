'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handlePlusOne = _this.handlePlusOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'handlePlusOne',
    value: function handlePlusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
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
          'Counter: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handlePlusOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.querySelector('#main'));

// const appProp = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: ['A', 'B', 'C'],
// };

// const getOptions = (options) => {
//   return options && options.length > 0 ? (
//     <p>Here are your options: {options.join(',')}</p>
//   ) : (
//     'No options'
//   );
// };

// const template = (
//   <div>
//     <h1>{appProp.title ? appProp.title : 'Untitled App'}</h1>
//     {appProp.subtitle && <p>{appProp.subtitle}</p>}
//     {getOptions(appProp.options)}
//   </div>
// );

// let count = 0;

// const handleAddOne = () => {
//   console.log('add one');
//   count++;
//   renderCounterApp();
// };

// const handleMinusOne = () => {
//   console.log('minus one');
//   count--;
//   renderCounterApp();
// };

// const handleReset = () => {
//   console.log('reset');
// };

// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleAddOne}>+1</button>
//       <button onClick={handleMinusOne}>-1</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(template, document.querySelector('#main'));
// };

// renderCounterApp();
