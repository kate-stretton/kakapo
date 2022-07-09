import { getKakapo } from './index'
import nock from 'nock'

const mockKakapo = {
  id: 1,
  name: 'Kate',
  hatchYear: 1995,
}

describe('calling kakapo API', () => {
  it('returns all the kakapo', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/kakapo')
      .reply(200, mockKakapo)

    const kakapo = await getKakapo()
    expect.assertions(1)
    expect(kakapo).toEqual(mockKakapo)
    scope.done()
  })
  it('returns error if unsuccessful', async () => {
    const scope = nock('http://localhost').get('/api/v1/kakapo').reply(500)
    let error = null
    return getKakapo()
      .catch((e) => {
        error = e
      })
      .finally(() => {
        expect(error).not.toBeNull()
        expect(scope.isDone()).toBe(true)
      })
  })
})
