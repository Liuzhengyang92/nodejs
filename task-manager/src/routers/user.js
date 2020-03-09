const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/test', (req, res) => {
  res.send('From a new file')
})

router.post('/users', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({user, token})
  } catch (e) {
    res.status(400).send(e)
  }

  // user.save().then(() => {
  //   res.status(201).send(user)
  // }).catch((err) => {
  //   res.status(400).send(err)
  // })
})

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (e) {
    console.log('error: ', e)
    res.status(400).send()
  }
})

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send()
  } catch(e) {
    res.status(500).send()
  }
})

router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    
    res.send()
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.get('/users', auth, async (req, res) => {

  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send(e)
  }
  // User.find({}).then((users) => {
  //   res.status(200).send(users)
  // }).catch((e) => {
  //   res.status(500).send()
  // })
})

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id)

    if (!user) {
      return res.status(404).send()
    }
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
  // User.findById(_id).then((user) => {
  //   if (!user) {
  //     return res.status(404).send()
  //   }

  //   res.send(user)
  // }).catch((e) => {
  //   res.status(500).send()
  // })
})

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const user = await User.findById(req.params.id)

    updates.forEach((update) => user[update] = req.body[update])
    await user.save()

    // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

// delete a user with given id
// router.delete('/users/:id', auth, async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id)

//     if (!user) {
//       return res.status(404).send()
//     }

//     res.send(user)
//   } catch (e) {
//     res.status(400).send(e)
//   }
// })

//delete the user self
router.delete('/users/me', auth, async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (e) {
    res.status(400).send(e)
  }
})


module.exports = router