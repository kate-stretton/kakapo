import { RECEIVE_KAKAPO } from '../actions'

function kakapo(state = [], action) {
  const { type, payload } = action
  switch (type) {
    // receive kakapo and add it to state
    case RECEIVE_KAKAPO:
      return payload
    // or if no kakapo, no change to state
    default:
      return state
  }
}

export default kakapo
