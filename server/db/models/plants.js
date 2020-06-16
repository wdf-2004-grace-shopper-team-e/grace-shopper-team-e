const Sequelize = require('sequelize')
const db = require('../db')

const Plants = db.define('plants', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
    // should the product be unique ?
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.bakingclouds.com/wp-content/uploads/2018/06/No-Longer-300x245.png'
  },
  stock: {
    type: Sequelize.STRING,
    defaultValue: true //lets customer know that it is available.
  },
  condition: {
    type: Sequelize.STRING,
    validate: {
      //must be one of the following
      isIn: [['indoor', 'outdoor', 'shade', 'low light', 'Just Add Water']]
    },
    defaultValue: 'Just Add Water'
  }
})

module.exports = Plants
