'use strict'
const {STRING, VIRTUAL, FLOAT, TEXT, INTEGER, ENUM, BOOL} = require('sequelize')

module.exports = db => db.define('renders', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  isCharacter: {
    type: BOOL
  }
})
