//Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
}

console.log(user)

// Object destructurring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 20,
  salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating } = product
// console.log('label: ', productLabel)//rename the label variable
// console.log('stock: ', stock)
// console.log(rating)

const transaction = (type, {label, stock = 0} = {}) => {
  console.log(type, label, stock) 
}

transaction('order', product)

