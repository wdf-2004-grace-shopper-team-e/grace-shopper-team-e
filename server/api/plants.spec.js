/* global describe beforeEach it */
const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Plant = db.model('plants')

describe('Plant routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/plants/', () => {
    const testPlant = {
      name: 'Cactus',
      price: 1000,
      description: 'indoor dry plant',
      stock: 10
    }

    beforeEach(() => {
      return Plant.create(testPlant)
    })

    it('GET /api/products', () => {
      return request(app)
        .get('/api/plants')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal('Cactus')
        })
    })
  }) // end describe('/api/plants')
}) // end describe('Plant routes')
