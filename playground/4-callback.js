//A callback function is a function that is passed in as a parameter to another function.
//Below are a couple of examples.
// setTimeout(() => { 
//     console.log('Two seconds are up.')
// }, 2000)

// const names = ['Mike', 'Bailey', 'Jamison']

// const filterNames = names.filter((name) => {
//     return name.length < 5
// })

// //Callback functions defined within a function decleration will return undefined.
// const geocode = (address, callback) => {
    
    
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             longitude:0
//         }

//         callback(data)
//     }, 2000)
   
// }

// geocode('Philidelphia', (data) => {
//     console.log(data)
// })


//Challenge
const add = (num1, num2, callback) => {
    
    setTimeout(() => {
        sum = num1 + num2
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
        console.log(sum)
})
