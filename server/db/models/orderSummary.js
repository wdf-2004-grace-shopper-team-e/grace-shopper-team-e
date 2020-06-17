const Sequelize = require('sequelize')
const db = require('../db')

const OrderSummary = db.define('plant_order', {
  quantity: {
    type: Sequelize.INTEGER
  },
  plantPrice: {
    type: Sequelize.INTEGER
  },
  subtotalCost: {
    type: Sequelize.INTEGER
  }
})

// instance methods
OrderSummary.prototype.setQuantities = () => {

}

OrderSummary.prototype.setPlantSubtotals = () => {

}

OrderSummary.prototype.setTotalCost = () => {

}

module.exports = OrderSummary