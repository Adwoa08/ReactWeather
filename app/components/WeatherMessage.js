"use strict";

var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location, description} = this.props;
//     return(
//       <div>
//         <h3>It's {temp} in {location}.</h3>
//         <p>Meaning: {description}</p>
//       </div>
//     )
//   }
// });

var WeatherMessage = function WeatherMessage(_ref) {
  var temp = _ref.temp;
  var location = _ref.location;
  var description = _ref.description;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      { className: "text-center" },
      "It's ",
      temp,
      "°F in ",
      location,
      "."
    ),
    React.createElement(
      "p",
      { className: "text-center" },
      "Sky Condition: ",
      description
    )
  );
};

module.exports = WeatherMessage;