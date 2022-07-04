import { SET_KAKAPO } from '../actions'

function kakapo(state = [], action) {
  //const { type, payload } = action
  switch (action.type) {
    // receive kakapo and add it to state
    case SET_KAKAPO:
      return action.kakapo
    // or if no kakapo, no change to state
    default:
      return state
  }
}

export default kakapo
