/*
  GET /series == retorna todas as series
  POST /series == crio uma nova serie
  GET /series/id == retorna uma serie
  DELETE /series/id == excluo uma serie
  PUT /series/id == altero uma serie
*/

const express = require('express')
const router = express.Router()
const Serie = require('../models/serie')

const jwt = require('jsonwebtoken')
const jwtSecret = 'abc123abc123abc123'

router.use(async (req, res, next) => {
  const token = req.headers['x-acess-token'] || req.body.token || req.query.token
  if (token) {
    try {
      const payload = jwt.verify(token, jwtSecret)
      console.log(payload)
      if (payload.roles.indexOf('restrito') >= 0) {
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
  const series = await Serie.find({})
  res.send(series)
})
router.get('/:id', async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id })
  res.send(serie)
})
router.post('/', async (req, res) => {
  const serie = new Serie(req.body)
  try {
    await serie.save()
    res.send(serie)
  }
  catch (err) {
    res.send({
      sucess: false,
      errors: Object.keys(e.errors)
    })
  }
})
router.delete('/:id', async (req, res) => {
  await Serie.remove({ _id: req.params.id })
  res.send({
    sucess: true
  })
})
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
router.put('/:id', async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id })
  serie.name = req.body.name
  serie.status = req.body.status
  try {
    await serie.save()
    res.send(serie)
  } catch (err) {
    res.send({
      sucess: false,
      errors: Object.keys(err.errors)
    })
  }
})

module.exports = router