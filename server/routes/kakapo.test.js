const request = require('supertest')
const server = require('../server')
const { getKakapo, addKakapo } = require('../db/db')

jest.mock('../db/db', () => ({
  getKakapo: jest.fn(),
  addKakapo: jest.fn(),
}))

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

const mockKakapo = [
  {
    id: 1,
    name: 'Kate',
    hatchYear: 1991,
  },
  {
    id: 2,
    name: 'Grace',
    hatchYear: 2000,
  },
]

describe('getKakapo', () => {
  it('returns all kakapo', () => {
    expect.assertions(2)
    getKakapo.mockReturnValue(Promise.resolve(mockKakapo))
    return request(server)
      .get('/api/v1/kakapo')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(mockKakapo[0].name).toBe('Kate')
      })
  })
  it('should return status 500 and an error when fails', () => {
    expect.assertions(2)
    getKakapo.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/kakapo/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})

describe('POST /api/v1/kakapo', () => {
  it('saves a new kakapo to the database', () => {
    const newKakapo = { name: 'Kate', hatchYear: 2020 }
    addKakapo.mockReturnValue(Promise.resolve({ ...newKakapo, id: 8 }))
    expect.assertions(4)
    return request(server)
      .post('/api/v1/kakapo')
      .send(newKakapo)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(addKakapo).toHaveBeenCalledWith(newKakapo)
        expect(res.body.name).toBe('Kate')
        expect(res.body.id).toBe(8)
      })
  })
  it('can fail and return an error message', () => {
    addKakapo.mockImplementation(() => Promise.reject(new Error('fail')))
    return request(server)
      .post('/api/v1/kakapo')
      .send({ id: 8, name: 'Kate', hatchYear: 2007 })
      .then((res) => {
        expect.assertions(1)
        expect(res.status).toBe(500)
      })
  })
})
