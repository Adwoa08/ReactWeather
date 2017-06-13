var axios = require('axios');


const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=7ab27f5343234dc70343fa4609aea592&units=imperial";



module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    // debugger;
  return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data;
      }

    }, function(err){
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
