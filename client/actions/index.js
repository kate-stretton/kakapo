// still unclear about what superagent does
import request from 'superagent'

//largely for the purpose of avoiding typos
export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_KAKAPO = 'RECEIVE_KAKAPO'
export const REQUEST_KAKAPO = 'REQUEST_KAKAPO'

// request for kakapo -
export function requestKakapo() {
  return {
    type: REQUEST_KAKAPO,
  }
}

// actually recieving the kakapo
export function receiveKakapo(kakapo) {
  return {
    type: RECEIVE_KAKAPO,
    payload: kakapo,
  }
}

// when sometihng goes wrong
export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchKakapo() {
  // thunk
  return (dispatch) => {
    dispatch(requestKakapo())
    return request
      .get(`/api/v1/kakapo`)
      .then((res) => {
        dispatch(receiveKakapo(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
