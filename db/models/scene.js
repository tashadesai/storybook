'use strict'

const {STRING, VIRTUAL} = require('sequelize')

module.exports = db => db.define('scenes', {
  name: STRING,
  image: {
    type: STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  }
}
