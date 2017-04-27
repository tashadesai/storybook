
const app = require('express').Router()
const watson = require('watson-developer-cloud')
const key = require('../keys')

var toneAnalyzer = watson.tone_analyzer(key);

app.get('/', function(req, res) {
  res.render('index', {
    ga: process.env.GOOGLE_ANALYTICS,
    bluemixAnalytics: process.env.BLUEMIX_ANALYTICS
  })
})

app.post('/', function(req, res, next) {
  toneAnalyzer.tone(req.body, function(err, data) {
    if (err) {
      return next(err)
    }
    // return res.json(data)
    // res.send(data)
    var allEmotions = data.document_tone.tone_categories[0].tones
    var max = 0
    var topEmotion
    allEmotions.forEach((emotion) => {
      if (emotion.score > max) {
        max = emotion.score
        topEmotion = emotion.tone_name
      }
    })
    res.send(topEmotion)
  })
})


module.exports = app

