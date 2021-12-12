/*
  GET /users
*/

const express = require('express')
const router = express.Router()
const User = require('../models/user')

const jwt = require('jsonwebtoken')
const jwtSecret = 'abc123abc123abc123'

router.use(async (req, res, next) => {
  const token = req.headers['x-acess-token'] || req.body.token || req.query.token
  if (token) {
    try {
      const payload = jwt.verify(token, jwtSecret)
      console.log(payload)
      if (payload.roles.indexOf('admin') >= 0) {
        next()
      } else {
        res.send({ sucess: false })
      }
    } catch (e) {
      res.send({ sucess: false })
    }
  } else {
    res.send({ sucess: false })
  }
})

router.get('/', async (req, res) => {
  const users = await User.find({})
  res.send(users)
})

module.exports = router