require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e62ddabc905317f28e217c6', { completed: false }).then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })


const DeleteTaskAndCount = async (id, completed) => {
  const tasks = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed})
  return count
}

DeleteTaskAndCount('5e62dde50a38557f3cba50a7', false).then((count) => {
  console.log(count)
}).catch(e => {
  console.log(e)
})