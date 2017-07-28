'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio = function (_React$Component) {
  _inherits(Audio, _React$Component);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
  }

  _createClass(Audio, [{
    key: 'play',
    value: function play() {
      _reactDom2.default.findDOMNode(this).play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      _reactDom2.default.findDOMNode(this).pause();
    }
  }, {
    key: 'skip',
    value: function skip(time) {
      var el = _reactDom2.default.findDOMNode(this);
      el.currentTime = el.currentTime + time;
    }
  }, {
    key: 'seek',
    value: function seek(time) {
      _reactDom2.default.findDOMNode(this).currentTime = time;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.onMount();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var audio = _reactDom2.default.findDOMNode(this);
      var _props = this.props,
          onEnded = _props.onEnded,
          onPause = _props.onPause,
          onPlaying = _props.onPlaying;

      audio.addEventListener('ended', onEnded);
      audio.addEventListener('pause', onPause);
      audio.addEventListener('playing', onPlaying);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var audio = _reactDom2.default.findDOMNode(this);
      var _props2 = this.props,
          onEnded = _props2.onEnded,
          onPause = _props2.onPause,
          onPlaying = _props2.onPlaying,
          onUnmount = _props2.onUnmount;

      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('playing', onPlaying);
      onUnmount();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var command = this.props.command;

      if (command !== 'none' && command !== prevProps.command) {
        this[command.command].apply(this, _toConsumableArray(command.args || []));
        this.props.onCommandComplete(command.command);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          autoPlay = _props3.autoPlay,
          controls = _props3.controls,
          loop = _props3.loop,
          preload = _props3.preload,
          src = _props3.src;


      return _react2.default.createElement('audio', {
        autoPlay: autoPlay,
        controls: controls,
        loop: loop,
        preload: preload,
        src: src
      });
    }
  }]);

  return Audio;
}(_react2.default.Component);

Audio.defaultProps = {
  autoPlay: false,
  controls: false,
  loop: false,
  preload: 'metadata'
};
Audio.propTypes = {
  autoPlay: _propTypes2.default.bool,
  command: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['none']), _propTypes2.default.shape({
    command: _propTypes2.default.oneOf(['play', 'pause', 'skip', 'seek']).isRequired,
    args: _propTypes2.default.array
  })]).isRequired,
  controls: _propTypes2.default.bool,
  loop: _propTypes2.default.bool,
  onEnded: _propTypes2.default.func.isRequired,
  onMount: _propTypes2.default.func.isRequired,
  onPause: _propTypes2.default.func.isRequired,
  onPlaying: _propTypes2.default.func.isRequired,
  onUnmount: _propTypes2.default.func.isRequired,
  onCommandComplete: _propTypes2.default.func.isRequired,
  preload: _propTypes2.default.oneOf(['none', 'metadata', 'auto']),
  src: _propTypes2.default.string.isRequired,
  uniqueId: _propTypes2.default.string.isRequired
};
exports.default = Audio;