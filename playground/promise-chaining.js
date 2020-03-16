require('../task-manager/src/db/mongoose')
const User = require('../task-manager/src/models/user')

// 5e62dc97f02c257efb08d450

// User.findByIdAndUpdate('5e62e2a455f3327fd087a0c3', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount('5e62e2a455f3327fd087a0c3', 2).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
