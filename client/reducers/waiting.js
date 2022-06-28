import { SHOW_ERROR, REQUEST_KAKAPO, RECEIVE_KAKAPO } from '../actions'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    // waiting icon will show when request is happening (true)
    case REQUEST_KAKAPO:
      return true
    // waiting icon will go away when kakapo recieved
    case RECEIVE_KAKAPO:
      return false
    // no more waiting icon if an error crops up
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
