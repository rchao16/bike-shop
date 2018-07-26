const Sequelize = require('sequelize')
const db = require('../db')

const OrderEntry = db.define('orderEntry', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderEntry
