import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import kakapo from './kakapo'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  kakapo,
  waiting,
})
