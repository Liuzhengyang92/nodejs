const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/task', auth, async (req, res) => {
  // const task = new Task(req.body)
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })

  try {
    await task.save()
    res.send(task)
  } catch (err) {
    res.status(400).send(err)
  }
  // task.save().then(() => {
  //   res.status(201).send(task)
  // }).catch((error) => {
  //   res.status(400).send(error)
  // })
})

router.get('/task', auth, async (req, res) => {

  try {
    const users = await Task.find({ owner: req.user._id })
    res.send(users)
  } catch (err) {
    res.status(500).send(err)
  }
  // Task.find({}).then((tasks) => {
  //   res.send(tasks)
  // }).catch((err) => {
  //   res.status(500).send()
  // })
})

router.get('/task/:id', auth, async (req, res) => {
  const _id = req.params.id

  try {
    // const task = await Task.findById(_id)
    const task = await Task.findOne({ _id, owner: req.user._id })

    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (err) {
    res.status(500).send(err)
  }
  // Task.findById(_id).then((task) => {
  //   if (!task) {
  //     return res.status(404).send()
  //   }

  //   res.send(task)
  // })
})

router.patch('/task/:id', auth, async (req, res) => {
  const allowedUpdates = ['description', 'completed']
  const updates = Object.keys(req.body)
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    res.status(400).send({ error: "Invalid updates!" })
  }

  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
    // const task = await Task.findById(req.params.id)

    if (!task) {
      return res.status(404).send()
    }

    updates.forEach((update) => task[update] = req.body[update])
    await task.save()
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    res.send(task)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/task/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router