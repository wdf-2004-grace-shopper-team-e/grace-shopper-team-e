const router = require('express').Router()
const {User, Order} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email', 'firstName', 'lastName', 'cartId', 'imgUrl']
      })
      res.json(users)
    } else {
      const err = new Error('You do not have Administrator access!')
      err.status = 401
      return next(err)
    }
  } catch (err) {
    next(err)
  }
})

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
      attributes: ['id', 'email', 'firstName', 'lastName', 'cartId'],
      where: {
        id: req.params.id
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// Get all plants currently in users cart
// ask Ube if it is the same as 'api/:orderId' !!!
// router.get('/', async (req, res, next) => {
//   try {
//     if (!req.user) {
//       res.sendStatus(204)
//     } else {
//       const allCartItems = await Order.getAllItemsInCart(
//         req.user.dataValues.cartId
//       )
//       res.json(allCartItems)
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// Merge guest cart with users cart
// similar to the PUT, but the body of the request contains only
// the property of the resource that needs to be changed.
router.patch('/', async (req, res, next) => {
  const orderId = req.user.dataValues.cartId
  const {guestCart, userCart} = req.body
  try {
    const mergedCarts = await Order.mergeCarts(orderId, guestCart, userCart)
    console.log('Merged carts: ', mergedCarts)
    res.status(202).json(mergedCarts)
  } catch (error) {
    console.error('Error in the cart merge route.', error)
  }
})
