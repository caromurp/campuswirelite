const express = require('express')
const Questions = require('../models/questions')
const isAuthenticated = require('../middlewares/isAuthenticated')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const all = await Questions.find({})
    console.log('yo in the backend')
    console.log(`all: ${all}`)

    res.send(all)
  } catch {
    res.send('failure occurs when getting all the questions')
  }
})

router.post('/add', isAuthenticated, (req, res) => {
  const { author, questionText } = req.body
  try {
    Questions.create({ author, questionText })
    res.send(`added question: ${questionText} by author: ${author}`)
  } catch {
    res.send('failure occurs when creating the question')
  }
})

router.post('/answer', isAuthenticated, (req, res) => {
  const { _id, answer } = req.body
  try {
    Questions.updateOne({ _id: _id }, { $set: { answer: answer } })
    res.send('questione updated')
  } catch {
    res.send('failure occurs when creating the question')
  }
})

module.exports = router
