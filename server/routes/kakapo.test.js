const request = require('supertest')
const server = require('../server')
const { getKakapo } = require('../db/db')

jest.mock('../db/db', () => ({
  getKakapo: jest.fn(),
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
