import { SHOW_ERROR } from '../actions'

function errorMessage(state = '', action) {
  const { type, payload } = action

  switch (type) {
    // if error, add error to state?
    case SHOW_ERROR:
      return payload
    // otherwise state remains empty
    default:
      return state
  }
}

export default errorMessage
