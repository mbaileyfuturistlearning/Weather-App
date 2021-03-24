//setTimeout is a method that gets registered to the node API, then
//to the callback queue then back to the call stack. These callback methods will
//go back to the call stack only after the main method has finished executing.
console.log('Starting')

setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

setTimeout(() =>{
    console.log('0 Second Timer')
}, 0)

console.log('Stopping')
console.log('Stopping')
console.log('Stopping')
console.log('Stopping')
console.log('Stopping')