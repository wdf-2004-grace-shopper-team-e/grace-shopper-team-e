const Sequelize = require('sequelize')
const db = require('../db')

const OrderSummary = db.define('plant_order', {
  plantQuantity: {
    type: Sequelize.INTEGER
  },
  plantSubtotal: {
    type: Sequelize.INTEGER
  }
  // subtotalCost: {
  //   type: Sequelize.INTEGER
  // }
})

// instance methods
OrderSummary.prototype.setPlantQuantity = value => {
  this.plantQuantity = value
}

OrderSummary.prototype.setPlantSubtotal = price => {
  this.plantSubtotal = price * this.plantQuantity
}

// OrderSummary.prototype.setTotalCost = () => {

// }

module.exports = OrderSummary
