const request = require('request')

const geocode = (address, callback) => {
    const urlMapBox = 'http://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoib2pvZGV2IiwiYSI6ImNrOHd2OGZ6MDAwY3IzaG54Z3V3bjloZjAifQ.Qclify8gKIKUobsVNtWhuw'
    request( {url: urlMapBox, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geomap service') // Second argument (data) is undefined
        } else if (response.body.features === undefined || response.body.features.length === 0) {
            callback('Unable to find location') // Second argument (data) is undefined
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                placename: response.body.features[0].place_name
            })
        }
    })
} 

module.exports = geocode