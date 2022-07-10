import {
  SET_KAKAPO,
  ADD_KAKAPO,
  DELETE_KAKAPO,
  UPDATE_KAKAPO,
} from '../actions'

function kakapo(state = [], action) {
  const { type, payload } = action
  switch (type) {
    // receive all kakapo and them to state
    case SET_KAKAPO:
      return payload
    // receive new kakapo and add it to state
    case ADD_KAKAPO:
      return [...state, payload]
    // delete by filtering out the kakapo in the payload
    case DELETE_KAKAPO:
      return state.filter((kakapo) => kakapo !== action.kakapo)
    // update for the kakako with the same id as payload
    case UPDATE_KAKAPO:
      return state.map((kakapo) => {
        if (kakapo.id === action.payload.id) {
          return { ...kakapo, ...action.payload }
        }
        return kakapo //or else just return kakapo (when id doesn't match)
      })
    // or if no kakapo, no change to state
    default:
      return state
  }
}

export default kakapo
