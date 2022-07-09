const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const { getKakapo } = require('./db.js')

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
