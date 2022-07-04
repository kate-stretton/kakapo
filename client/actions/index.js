import { getKakapo } from '../apis/index'

//largely for the purpose of avoiding typos
export const SET_KAKAPO = 'SET_KAKAPO'

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
