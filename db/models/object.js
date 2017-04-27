'use strict'

const {STRING, VIRTUAL} = require('sequelize')

module.exports = db => db.define('objects', {
  name: STRING,
  image: {
    type: STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  }
})

module.exports.associations = (User, {OAuth, Thing, Favorite}) => {
  User.hasOne(OAuth)
  User.belongsToMany(Thing, {as: 'favorites', through: Favorite})
}
