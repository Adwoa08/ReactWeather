'use strict';

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  displayName: 'Weather',

  getInitialState: function getInitialState() {
    return {
      isLoading: false
    };
  },

  handleSearch: function handleSearch(location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      despcription: undefined
    });

    openWeatherMap.getTemp(location).then(function (data) {

      console.log(data);
      that.setState({
        isLoading: false,
        location: location,
        temp: data.main.temp,
        description: data.weather[0].description
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function componentDidMount() {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function render() {
    var _state = this.state;
    var isLoading = _state.isLoading;
    var temp = _state.temp;
    var location = _state.location;
    var description = _state.description;
    var errorMessage = _state.errorMessage;

    //the above can be rewritten as below.
    // var location = this.state.location;
    // var temp = this.state.temp;

    function renderMessage() {
      if (isLoading) {
        return React.createElement(
          'h3',
          { className: 'text-center' },
          'Retrieving weather...'
        );
      } else if (temp && location) {
        return React.createElement(WeatherMessage, { location: location, temp: temp, description: description });
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return React.createElement(ErrorModal, { message: errorMessage });
      }
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'text-center page-title' },
        'Get Weather'
      ),
      React.createElement(WeatherForm, { onSearch: this.handleSearch }),
      renderMessage(),
      renderError()
    );
  }
});

module.exports = Weather;