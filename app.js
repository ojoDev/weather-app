const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
/*
const urlWeatherstack = 'http://api.weatherstack.com/current?access_key=73e8a1c1576f7e367936582910bb1d05&query=40.395084,-3.707767'
request( {url: urlWeatherstack, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log('Its is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
        console.log(response.body.current.weather_descriptions[0] +'. There is a ' + response.body.current.precip + ' chance of rain')
    }
}) */

/*const urlMapBox = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Calle%20san%20Delfin.json?access_token=pk.eyJ1Ijoib2pvZGV2IiwiYSI6ImNrOHd2OGZ6MDAwY3IzaG54Z3V3bjloZjAifQ.Qclify8gKIKUobsVNtWhuw'
request( {url: urlMapBox, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to geomap service')
    } else if (response.body.features === undefined || response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const lat = response.body.features[0].center[1];
        const lon = response.body.features[0].center[0];
        console.log('Lat: ' + lat + '. Lon:' + lon )
    }
})*/



geocode('Calle San Delfin', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

forecast('40.395084','-3.707767', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})