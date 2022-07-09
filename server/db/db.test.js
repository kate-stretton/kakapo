const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const { getKakapo, getAKakapo } = require('./db.js')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getKakapo', () => {
  it('gets all the kakapos from the database', () => {
    expect.assertions(2)
    return getKakapo(testDb).then((kakapos) => {
      expect(kakapos).toHaveLength(7)
      expect(kakapos[1].name).toBe('Kumi')
    })
  })
})

describe('getAKakapo', () => {
  it('get a kakapo by id', () => {
    return getAKakapo(2, testDb).then((kakapo) => {
      expect.assertions(2)
      expect(kakapo.name).toBe('Kumi')
      expect(kakapo.id).not.toBe(1)
    })
  })
})

// describe('deleteKakapo', () => {
//   it('deletes a kakapo from the database', () => {
//     return deleteKakapo(1, testDb).then((kakapo) => {

//       expect(kakapo).toHaveLength(6)
//     })
//   })
// })

// describe('updateKakapo', () => {
//   it('updates name of kakapo', () => {
//     //expect.assertions(2)
//     const updatedKakapo = {
//       id: 2,
//       name: 'Adelaide',
//       hatchYear: 2005,
//     }
//     return updateKakapo(2, updatedKakapo, testDb).then((kakapo) => {
//       expect(kakapo.name).toBe('Adelaide')
//       expect(kakapo.id).toBe(2)
//     })
//   })
// })
