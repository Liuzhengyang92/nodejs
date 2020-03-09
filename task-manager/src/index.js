const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port  = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET request are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Service is under maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  //the next three lines are used to find the user who creates the task
  // const task = await Task.findById('5e661b535798012a76edd0c0')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  //the next three lines are used to find all the tasks created by the given user
  // const user = await User.findById('5e661aa09e31f62a2c49e38e')
  // await user.populate('tasks').execPopulate()
  // console.log(user.tasks)
}

main()