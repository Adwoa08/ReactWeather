var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },

  handleSearch: function (location){
    var that = this;

    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(data){
      that.setState({
        isLoading: false,
        location: location,
        temp: data.main.temp,
        description: data.weather[0].description
      });
    }, function(errorMessage){
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    })
  },

  render: function(){
    var {isLoading, temp, location, description} = this.state;
    //the above can be rewritten as below.
    // var location = this.state.location;
    // var temp = this.state.temp;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location){
        return <WeatherMessage location={location} temp={temp} description={description}/>
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather;
