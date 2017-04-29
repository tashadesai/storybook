const app = require('express').Router()
const Renders = require('../db/models/render')

app.get('/renders/characters/:name', function(req, res, next) {
  Renders.findOne({
    where: {
      name: req.params.name,
      isCharacter: true
    }
  })
  .then(foundRender => {
    res.send(foundRender)
  })
})

app.get('/renders/renders/:name', function(req, res, next) {
  Renders.findOne({
    where: {
      name: req.params.name
    }
  })
  .then(foundRender => {
    res.send(foundRender)
  })
})

module.exports = app
