const router = require('express').Router()
const { Order } = require('../db/models')
module.exports = router

// add an order to the database
router.post('/', async (req, res, next) => {
  try {
    res.json(await Order.create(req.body))
  }
  catch (error) {
    next(error)
  }
})