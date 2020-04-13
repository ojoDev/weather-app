const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


var appArgs = process.argv.slice(2);
if (appArgs.length === 0) {
    return console.log("Needs to include a location. Ex: node app.js 'Calle San Delfin'")
} 


geocode(appArgs[0], (error, {latitude, longitude, placename}) => {
    if (error) {
        return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(placename)
        console.log(forecastData)
    })
})

