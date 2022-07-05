import {
  getKakapo,
  postKakapo,
  farewellKakapo,
  patchKakapo,
} from '../apis/index'

//largely for the purpose of avoiding typos
export const SET_KAKAPO = 'SET_KAKAPO'
export const ADD_KAKAPO = 'ADD_KAKAPO'
export const DELETE_KAKAPO = 'DELETE_KAKAPO'
export const UPDATE_KAKAPO = 'UPDATE_KAKAPO'

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

function updateKakapo(kakapo) {
  return {
    type: UPDATE_KAKAPO,
    payload: kakapo,
  }
}

export function newNameKakapo(kakapo) {
  return (dispatch) => {
    return patchKakapo(kakapo) //patch! because we're talking to the api client
      .then(() => {
        dispatch(updateKakapo(kakapo))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
