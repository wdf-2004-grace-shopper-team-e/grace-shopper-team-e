const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  xdescribe('/api/users/:id', () => {
    const userEmail = 'jasmineB@email.com'
    const userFirst = 'Jasmine'
    const userLast = 'Brown'

    beforeEach(() => {
      return User.create({
        email: userEmail,
        firstName: userFirst,
        lastName: userLast,
        isAdmin: false
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(userEmail)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
