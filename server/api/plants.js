const router = require('express').Router()
const Plants = require('../db/models/plants')

//find all plants
router.get('/', async (req, res, next) => {
  try {
    const plants = await Plants.findAll()
    res.json(plants)
  } catch (err) {
    next(err)
  }
})

//find single plant by id
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const plant = await Plant.findByPk(id)
    if (plant) {
      res.json(plant)
    } else {
      res.send('Sorry This Item Is No Longer Available').sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
