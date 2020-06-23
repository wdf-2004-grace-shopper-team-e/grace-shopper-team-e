const router = require('express').Router()
const {User, Order} = require('../db/models/index')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    // console.log('this is req.body******', req.body)
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Wrong username and/or password')
    } else {
      req.session.userId = user.dataValues.id
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const cart = await Order.create()
    const user = await User.create({...req.body, cartId: cart.id})
    console.log(cart)
    console.log(user)
    cart.setUser(user)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
