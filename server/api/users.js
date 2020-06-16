const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.put('/', async (req, res, next) => {
  const userId = req.body.id
  try {
    await User.update(req.body, {
      where: {
        id: userId
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'email', 'firstName', 'lastName', 'orders', 'cart'],
      where: {
        id: req.params.id
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/orders', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      // select all orders associated with this user
      attributes: ['id', 'userId']
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/cart', async (req, res, next) => {
  try {
    const plants = await Plant.findAll({
      // select all items associated with this user's shopping cart
      attributes: ['id', 'userId']
    })
    res.json(plants)
  } catch (err) {
    next(err)
  }
})
