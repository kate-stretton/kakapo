import { getKakapo, postKakapo } from '../apis/index'

//largely for the purpose of avoiding typos
export const SET_KAKAPO = 'SET_KAKAPO'
export const ADD_KAKAPO = 'ADD_KAKAPO'

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
  console.log('actions:', kakapo)
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
