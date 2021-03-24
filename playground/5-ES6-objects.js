//Object property shorthand.
const firstName = 'Micheal'
const userAge = 26

const user = {
    //This is a short for firstName:firstName
    firstName,
    userAge,
    location: 'Silver Spring'
}

console.log(user)

//Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating:4.2
}

// const label = product.label
// const stock = product.stock

//object destructuring pulls the values out of an object.
//We can also rename our variables with the colon syntex.
const {label:productLabel, stock, rating = 5} = product

console.log(productLabel)
console.log(stock)

//This will print undefined because rating doesnt exist within our object.
console.log(rating)

//We can also destructure an object within function parameters.
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)