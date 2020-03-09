const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') //get binary data
// const dataJSON = dataBuffer.toString() //convert data to a standard string in js
// const data = JSON.parse(dataJSON) //tranfer the json data to an Object
// console.log(data.title) //finally...

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
console.log(user)
user.name = "Kobe"
user.planet = "Heaven"
user.age = 41
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)