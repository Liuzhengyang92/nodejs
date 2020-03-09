const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid!')
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes('password')) {
//         throw new Error('Password is not allowed to use!')
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number')
//       }
//     }
//   }
// })

// const me = new User({
//   name: '   Mike  ',
//   email: 'MYEMAIL@gmail.com   ',
//   password: 'Newsword'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error: ', error)
// })

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   }
// })

// const task1 = new Task({
//   description: 'cat-grooming'
// })

// task1.save().then(() => {
//   console.log(task1)
// }).catch((error) => {
//   console.log('Error: ', error)
// })

