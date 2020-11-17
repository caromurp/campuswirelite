const express = require('express')

const isAuthenticated = (req, res, next) => {
  try {
    if (req.session.username !== '') {
      next()
    } else {
      res.send('No user logged in')
    }
  } catch (e) {
    next(e)
    res.send('Error in middle ware')
  }
}

module.exports = isAuthenticated
