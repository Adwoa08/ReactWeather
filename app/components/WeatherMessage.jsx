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


var WeatherMessage = ({temp, location, description}) => {
  return(
    <div>
      <h3>It's {temp} in {location}.</h3>
      <p>Meaning: {description}</p>
    </div>
  )
}


module.exports = WeatherMessage;
