//This same process can be used on https as well. 
//still recomended to use the 'request' npm module as the process is simpler.
const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=107eed3b02a9509042775072179541a3&query=40,-75&units=f'

const request = http.request(url, (response) => {

    let data = ''
    
    //This callback will run when data is called in.
    response.on('data', (chunck) => {
        data = data + chunck.toString()
    })

    //This callback will run when the request is done.
    response.on('end', () => {
        const dataObject = JSON.parse(data)
        console.log(dataObject)
    })
})

request.on('error', (error) => {
    console.log('Error', error)
})

//This will initiate the request process.
request.end()