const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const urlWeatherstack = 'http://api.weatherstack.com/current?access_key=73e8a1c1576f7e367936582910bb1d05&query='+latitude + ',' + longitude
    request( {url: urlWeatherstack, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, 'Its is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out. ' + response.body.current.weather_descriptions[0] +'. There is a ' + response.body.current.precip + ' chance of rain')
        }
    })
}

module.exports = forecast