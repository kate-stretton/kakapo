import kakapo from './kakapo'
import { setKakapo } from '../actions/index'

describe('kakapo reducer', () => {
  it('sets kakapo data', () => {
    const initialState = []
    const action = setKakapo([{ id: 2, name: 'Stella', hatchYear: '2009' }])
    const newState = kakapo(initialState, action)
    expect.assertions(2)
    expect(newState).toEqual(action.payload)
    expect(newState[0].name).toBe('Stella')
  })
  it('returns default state for undefined state and no action type', () => {
    const expectedState = []
    const newState = kakapo(undefined, [])
    expect.assertions(2)
    expect(newState).toEqual(expectedState)
    expect(newState).toHaveLength(0)
  })
})
