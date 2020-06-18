const router = require('express').Router()
const {OrderSummary, Order, Plant} = require('../db/models')
module.exports = router

// get all of the plants of a specific order
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

// add a specific plant to a specific order
router.post('/:orderId/add/:plantId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {id: req.params.orderId}
    })
    const plantToAdd = await Plant.findOne({
      where: {id: req.params.plantId}
    })

    await order.addOrderSummary(plantToAdd)
    await plantToAdd.addOrderSummary(order)

    const plant = await OrderSummary.findOne({
      where: {
        plantId: req.params.plantId,
        orderId: req.params.orderId
      }
    })
    console.log('plant', plant)
    console.log('qty before: ', plant.plantQuantity)
    plant.setPlantQuantity(1)
    plant.setPlantSubtotal(plant.price)
    console.log('qty after: ', plant.plantQuantity)

    const updatedOrder = await Order.findOne({
      where: {id: req.params.orderId},
      include: [{model: Plant, as: 'OrderSummary'}]
    })
    // console.log('updated order: ', updatedOrder)
    res.json(updatedOrder)
  } catch (error) {
    next(error)
  }
})

// remove a specific plant associated with an order
router.delete('/:orderId/remove/:plantId', async (req, res, next) => {
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

    await order.removePlant(plant)
    await plant.removeOrder(order)

    const updatedOrder = await OrderSummary.findOne({
      where: {orderId: req.params.orderId},
      include: [{model: Plant}]
    })
    res.json(updatedOrder)
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
