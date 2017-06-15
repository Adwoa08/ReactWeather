var React = require('react');



var WeatherMessage = ({temp, location, description}) => {
  return(
    <div>
      <h3 className="text-center">It's {temp}°F in {location}.</h3>
      <p className="text-center">Sky Condition: {description}</p>
    </div>
  )
}


module.exports = WeatherMessage;
