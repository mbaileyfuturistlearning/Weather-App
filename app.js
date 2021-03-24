//http requests can be used with the request. Just remember the module name
//is called postman-request. request is a depricated module, postman are the ones
//continuing to support it.
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')
const {argv} = require('yargs')



yargs.command({
    command: 'location',
    description: 'Reads in a city name',
    builder:{
        city:{
            descibe: 'City Name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => geocode(argv.city, (error, {latitude, longitude, location}) => {
    
        if(error){
            console.log('Error', error)
        }else{
            forecast(latitude, longitude, (error, weatherData) => {
                if(error){
                    console.log('Error', error)
                }else{
                    console.log('Location:', location)
                    console.log('Weather:', weatherData)
                }
              }) 
        }
    
    })
})

console.log(yargs.argv)