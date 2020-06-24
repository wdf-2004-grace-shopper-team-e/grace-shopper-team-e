const router = require('express').Router()
const adminCheck = require('./gatekeepers')
const {User, Order, Plant} = require('../db/models')

module.exports = router

router.get('/', adminCheck, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'firstName', 'lastName', 'cartId', 'imgUrl']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  const userId = req.body.id
  try {
    const user = await User.update(req.body, {
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
      attributes: ['id', 'email', 'firstName', 'lastName', 'cartId', 'isAdmin'],
      where: {
        id: req.params.id
      },
      include: {
        model: Order,
        include: {
          model: Plant,
          as: 'OrderSummary'
        }
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// set specific order to user
router.put('/:userId/set/:orderId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {id: req.params.userId}
    })
    const order = await Order.findOne({
      where: {id: req.params.orderId}
    })

    await user.addOrder(order)

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
