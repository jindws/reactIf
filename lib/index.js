'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {render} from 'react-dom';

var ReactIf = function (_Component) {
  _inherits(ReactIf, _Component);

  function ReactIf(props) {
    _classCallCheck(this, ReactIf);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  ReactIf.prototype.render = function render() {
    return _react2.default.createElement(
      'span',
      { style: { display: this.props.show ? '' : 'none' } },
      this.props.children
    );
  };

  return ReactIf;
}(_react.Component);

exports.default = ReactIf;
module.exports = exports['default'];