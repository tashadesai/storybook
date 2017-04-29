'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/tone', require('./tone'))
  .use('/words', require('./words'))
  .use('/renders', require('./renders'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
