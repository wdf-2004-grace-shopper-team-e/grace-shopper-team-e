const router = require('express').Router()
const {OrderSummary, Order, Plant} = require('../db/models')
module.exports = router

// get a specific order, and include all of its plants
router.get('/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId
    const order = await OrderSummary.findOne({
      where: {orderId: orderId},
      include: [{model: Plant}]
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// add a specific plant to a specific order
router.post('/:orderId/add/:plantId', async (req, res, next) => {
  try {
    const order = await OrderSummary.findOne({
      where: {id: req.params.orderId}
    })
    const plantToAdd = await Plant.findOne({
      where: {id: req.params.plantId}
    })

    await order.addPlant(plantToAdd)
    await plantToAdd.addOrder(order)

    const plant = await OrderSummary.findOne({
      where: {
        plantId: req.params.plantId,
        orderId: req.params.orderId
      }
    })

    plant.setPlantQuantity(1)
    plant.setPlantSubtotal(plant.price)

    const updatedOrder = await OrderSummary.findOne({
      where: {id: req.params.orderId},
      include: [{model: Plant}]
    })

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
