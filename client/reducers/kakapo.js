import { SET_KAKAPO, ADD_KAKAPO } from '../actions'

function kakapo(state = [], action) {
  //const { type, payload } = action
  switch (action.type) {
    // receive all kakapo and them to state
    case SET_KAKAPO:
      return action.kakapo
    // receive new kakapo and add it to state
    case ADD_KAKAPO:
      return [...state, action.kakapo]
    // or if no kakapo, no change to state
    default:
      return state
  }
}

export default kakapo
