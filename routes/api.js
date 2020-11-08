const express = require('express')
const Question = require('../models/question')
const isAuthenticated = require('../middlewares/isAuthenticated')
const router = express.Router()

router.get('/', (req, res) => {
  try {
    const all = Question.find()
    res.send(`questions: ${all}`)
  } catch {
    res.send('failure occurs when getting all the questions')
  }
})

router.post('/add', isAuthenticated, (req, res) => {
  const { author, questionText } = req.body
  try {
    Question.create({ author, questionText })
    res.send(`added question: ${questionText} by author: ${author}`)
  } catch {
    res.send('failure occurs when creating the question')
  }
})

router.post('/answer', isAuthenticated, (req, res) => {
  const { _id, answer } = req.body
  try {
    Question.updateOne({ _id: _id }, { $set: { answer: answer } })
    res.send('questione updated')
  } catch {
    res.send('failure occurs when creating the question')
  }
})

module.exports = router
