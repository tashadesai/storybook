
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
    res.send(data)
  })
})


module.exports = app

// toneAnalyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
//   function(err, tone) {
//     if (err)
//       console.log(err);
//     else
//       console.log(JSON.stringify(tone, null, 2));
// });
