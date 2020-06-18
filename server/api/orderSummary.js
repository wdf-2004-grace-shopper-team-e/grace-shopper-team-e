const router = require('express').Router()
const {OrderSummary, Order, Plant} = require('../db/models')
module.exports = router

// get all of the plants of a specific order, including their specific through-table quantity and subTotal
router.get('/:orderId/plants', async (req, res, next) => {
  try {
    const orderId = req.params.orderId
    const order = await Order.findOne({
      where: {id: orderId},
      include: [{model: Plant, as: 'OrderSummary'}]
    })

    res.json(order.OrderSummary)
  } catch (error) {
    next(error)
  }
})

// add a specific plant to a specific order, and update its quantity and subtotal
router.post('/:orderId/add/:plantId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {id: req.params.orderId}
    })
    const plantToAdd = await Plant.findOne({
      where: {id: req.params.plantId}
    })

    await plantToAdd.addOrderSummary(order)
    await order.addOrderSummary(plantToAdd)

    const plant = await OrderSummary.findOne({
      where: {
        plantId: req.params.plantId,
        orderId: req.params.orderId
      }
    })

    await plant.update({
      plantQuantity: 1
    })
    await plant.update({
      plantSubtotal: plantToAdd.price * plant.plantQuantity
    })

    const updatedOrder = await Order.findOne({
      where: {id: req.params.orderId},
      include: [{model: Plant, as: 'OrderSummary'}]
    })

    res.json(updatedOrder.OrderSummary)
  } catch (error) {
    next(error)
  }
})

// remove a specific plant associated with an order
router.delete('/:orderId/remove/:plantId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {id: req.params.orderId}
    })
    const plant = await Plant.findOne({
      where: {id: req.params.plantId}
    })

    await order.removeOrderSummary(plant)
    await plant.removeOrderSummary(order)

    const updatedOrder = await Order.findOne({
      where: {id: req.params.orderId},
      include: [{model: Plant, as: 'OrderSummary'}]
    })
    res.json(updatedOrder.OrderSummary)
  } catch (error) {
    next(error)
  }
})

// edit specific plants associated with an order
router.put('/:orderId/edit/:plantId/:value', async (req, res, next) => {
  try {
    const order = await OrderSummary.findOne({
      where: {orderId: req.params.orderId}
    })
    const plant = await OrderSummary.findOne({
      where: {
        orderId: req.params.orderId,
        plantId: req.params.plantId
      }
    })

    plant.setQuantity(req.params.value)
    plant.setPlantSubtotal(plant.price)

    const updatedOrder = await OrderSummary.findOne({
      where: {orderId: req.params.orderId},
      include: [{model: Plant}]
    })
    res.json(updatedOrder)
  } catch (error) {
    next(error)
  }
})
