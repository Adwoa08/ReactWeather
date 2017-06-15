'use strict';

var React = require('react');

var _require = require('react-router');

var Link = _require.Link;

//Note that we dont use the props but it has to be there as the only argument
var Examples = function Examples(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { className: 'text-center page-title' },
      'Examples'
    ),
    React.createElement(
      'p',
      null,
      'Here are a few example locations to try out:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          Link,
          { to: '/?location=Kailua' },
          'Kailua, HI'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          Link,
          { to: '/?location=Philadelphia' },
          'Philadelphia, PA'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          Link,
          { to: '/?location=Rio de Janeiro' },
          'Rio de Janeiro, Brazil'
        )
      )
    )
  );
};

module.exports = Examples;