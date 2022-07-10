const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const { getKakapo, getAKakapo, deleteKakapo, updateKakapo } = require('./db.js')

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

describe('deleteKakapo', () => {
  it('deletes just one kakapo from database', () => {
    return deleteKakapo(2, testDb).then((deletedKakapo) => {
      expect.assertions(1)
      expect(deletedKakapo).toBe(1)
    })
  })
  it('deletes one kakapo with matching id', () => {
    return deleteKakapo(2, testDb)
      .then(() => {
        // return getKakapo(testDb)
        return testDb('kakapo').select()
      })
      .then((kakapoArray) => {
        expect.assertions(2)
        expect(kakapoArray).toHaveLength(6) //because there were 7 but i deleted one
        expect(kakapoArray[1].id).not.toBe(2) //because we deleted the second kakapo
      })
  })
})

describe('updateKakapo', () => {
  it('updates name of kakapo', () => {
    return updateKakapo(5, { name: 'Kate' }, testDb)
      .then(() => {
        return getKakapo(testDb)
      })
      .then((kakapoArray) => {
        expect.assertions(2)
        expect(kakapoArray[4].name).toBe('Kate')
        expect(kakapoArray[3].name).toBe('Kuia') //ie only replaced the name of one kakapo
      })
  })
})
