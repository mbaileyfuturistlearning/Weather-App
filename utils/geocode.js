const request = require('request')

const geocode = (address, callback) => {

    //This method is used for encoding special character that actually mean something in a URL. 
    //Example: ? becomes %3F.
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + 
                '.json?access_token=pk.eyJ1IjoibWJhaWxleWZ1dHVyaXN0IiwiYSI6ImNrbWRoOG1zYjJpejQzM29ja3p5bXJhcWsifQ.HsaN3gEFakdjtaw00jcKwA&limit1'

    //Since we only use the body property from the response object, we can destructure it.
    request({ url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to server', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Find another search.', undefined)
        }else{
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode