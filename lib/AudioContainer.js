'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Audio = require('./Audio');

var _Audio2 = _interopRequireDefault(_Audio);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var stateObj = state.audio.get(ownProps.uniqueId);
  if (ownProps.src && stateObj && !stateObj.get('src')) {
    return {
      command: stateObj ? stateObj.get('command') : 'none'
    };
  } else {
    return {
      command: stateObj ? stateObj.get('command') : 'none',
      src: stateObj ? stateObj.get('src') : ''
    };
  }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onEnded: function onEnded() {
      dispatch((0, _actions.audioEnded)(ownProps.uniqueId));
    },
    onMount: function onMount() {
      dispatch((0, _actions.audioRegister)(ownProps.uniqueId));
      if (ownProps.src) {
        dispatch((0, _actions.audioSrc)(ownProps.uniqueId, ownProps.src));
      }
    },
    onPause: function onPause() {
      dispatch((0, _actions.audioPaused)(ownProps.uniqueId));
    },
    onPlaying: function onPlaying() {
      dispatch((0, _actions.audioPlaying)(ownProps.uniqueId));
    },
    onUnmount: function onUnmount() {
      dispatch((0, _actions.audioUnregister)(ownProps.uniqueId));
    },
    onCommandComplete: function onCommandComplete() {
      dispatch((0, _actions.audioCommandComplete)(ownProps.uniqueId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Audio2.default);