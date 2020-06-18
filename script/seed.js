'use strict'
const db = require('../server/db')
const {Plant} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  //Plant names From: https://en.wikipedia.org/wiki/List_of_fictional_plants

  //Plant images From: Unsplash - The internet’s source of freely-usable images.

  // phase 1 of seeding data. Would like too:
  // update the description and price
  // randomize the season, stock and living condition
  // If not will manually update

  //api is currently producing all plant dummy data and single plant dummy data

  const plant1 = await Plant.create({
    name: 'Cactus',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10,
    livingConditions: 'shade',
    season: 'Summer'
  })
  const plant2 = await Plant.create({
    name: 'Plantera',
    price: 1000,
    imageUrl:
      'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant3 = await Plant.create({
    name: 'Treant',
    price: 1000,
    stock: 10
  })
  const plant4 = await Plant.create({
    name: 'Kelpie',
    price: 3498,
    imageUrl:
      'https://images.unsplash.com/photo-1530176238587-b53132214c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant5 = await Plant.create({
    name: 'Myconid',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1521944521548-a8ed0caa8f38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant6 = await Plant.create({
    name: 'Shalebark',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1533629046790-addefc28951e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant7 = await Plant.create({
    name: 'Rockbuds',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1558693168-c370615b54e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant8 = await Plant.create({
    name: 'Knobweed',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1590452224879-867e8012a828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant9 = await Plant.create({
    name: 'Prickletac',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1556408978-ce0a0a5e352e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant10 = await Plant.create({
    name: 'Firemoss',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1575772684422-06925a4a8ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant11 = await Plant.create({
    name: 'Mandrakes',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant12 = await Plant.create({
    name: 'Gurdyroot',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1562351831-03432082f946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant13 = await Plant.create({
    name: 'Gillyweed',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1575652471646-d37126819b27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant14 = await Plant.create({
    name: 'Buy 1 Get 3',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1556408978-4d89b27624bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10,
    livingConditions: 'shade',
    season: 'Summer'
  })
  const plant15 = await Plant.create({
    name: 'Cactus',
    price: 1000,
    description: 'indoor dry plant',
    stock: 10
  })
  const plant16 = await Plant.create({
    name: 'Bowtruckle',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1556408977-209cb41649e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10,
    livingConditions: 'sun',
    season: 'Summer'
  })
  const plant17 = await Plant.create({
    name: 'Cactacae',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1562351757-66f3589f30cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant18 = await Plant.create({
    name: 'Biollante',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1580428456289-31b363a16e73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant19 = await Plant.create({
    name: 'Krynoid',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1590622541550-5bc0b2df5bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant20 = await Plant.create({
    name: 'Snake Vine',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1507746212228-2d3645cbeb56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant21 = await Plant.create({
    name: 'Triffids',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1566836610874-46562b32dfc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant22 = await Plant.create({
    name: 'Aeglos',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1581176780057-c6b5258ff5a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant23 = await Plant.create({
    name: 'Athelas',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1565241603507-952d845eceb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant24 = await Plant.create({
    name: 'Inkvine',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1589597606736-e78a0438e081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant25 = await Plant.create({
    name: 'Mallorn',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1591454371758-644f9d123a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant26 = await Plant.create({
    name: 'Nimloth',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1563419837758-e48ef1b731dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  const plant27 = await Plant.create({
    name: 'Pipe-weed',
    price: 1000,
    description: 'indoor dry plant',
    imageUrl:
      'https://images.unsplash.com/photo-1550731827-6ec2951e3099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    stock: 10
  })
  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
