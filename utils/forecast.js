const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=107eed3b02a9509042775072179541a3&query=' + latitude + 
                ', ' + longitude + '&units=f'

    //Since we only use the body property from the response object, we can destructure it.
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to fetch data from server.', undefined)
        }else if(body.error){
            callback('imporoper latitude and longitude.', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. Feels like ' + 
            body.current.feelslike + ' degrees with a ' + body.current.precip + 
            '% chance of percipitation.')
        }
    })
}

module.exports = forecast