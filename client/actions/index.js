import { getKakapo, postKakapo, farewellKakapo } from '../apis/index'

//largely for the purpose of avoiding typos
export const SET_KAKAPO = 'SET_KAKAPO'
export const ADD_KAKAPO = 'ADD_KAKAPO'
export const DELETE_KAKAPO = 'DELETE_KAKAPO'

export function fetchKakapo() {
  return (dispatch) => {
    return getKakapo()
      .then((kakapo) => {
        dispatch(setKakapo(kakapo))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function setKakapo(kakapo) {
  return {
    type: SET_KAKAPO,
    kakapo,
  }
}

export function addKakapo(kakapo) {
  return {
    type: ADD_KAKAPO,
    kakapo,
  }
}

export function saveKakapo(kakapo) {
  //console.log('actions:', kakapo)
  return (dispatch) => {
    return postKakapo(kakapo)
      .then((newKakapo) => {
        dispatch(addKakapo(newKakapo))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

function deleteKakapo(id) {
  return {
    type: DELETE_KAKAPO,
    id,
  }
}

export function removeKakapo(id) {
  return (dispatch) => {
    return farewellKakapo(id)
      .then(() => {
        dispatch(deleteKakapo(id))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
