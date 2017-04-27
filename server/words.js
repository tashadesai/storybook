const app = require('express').Router()
var nlp = require('compromise')
// var t=nlp('dinosaur').nouns().toPlural();
// console.log(t.out('text'))
// 'dinosaurs'

app.post('/nouns', function(req, res, next) {
  var text = req.body.text
  res.status(200).send(nlp(text).nouns().out('text'))
})

app.post('/people', function(req, res, next) {
  var text = req.body.text
  res.status(200).send(nlp(text).people().out('text'))
})

app.post('/places', function(req, res, next) {
  var text = req.body.text
  res.status(200).send(nlp(text).places().out('text'))
})

module.exports = app
