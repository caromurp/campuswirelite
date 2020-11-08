const mongoose = require('mongoose')
const express = require('express')
const cookieSession = require('cookie-session')

const APIRouter = require('./routes/api')
const AccountRouter = require('./routes/account')

const isAuthenticated = require('./middlewares/isAuthenticated')

const app = express()

const MONGO_URI = 'mongodb://localhost:27017/campuswirelite'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['spooky'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
)

app.use('/api', APIRouter)
app.use('/account', AccountRouter)
app.use(isAuthenticated)

app.use(function (err, req, res, next) {
  res.status(400).send(err.message)
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
