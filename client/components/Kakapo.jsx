import React from 'react'
import {removeKakapo, fetchKakapo} from '../actions'
import {useDispatch}from 'react-redux'
import UpdateKakapo from './UpdateKakapo'

function Kakapo ({id, name, year}) {
  const dispatch = useDispatch()
  function handleDelete(){
    dispatch(removeKakapo(id))
    .then(dispatch(fetchKakapo()))
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
    <ul>
      <li>
        {id}, {name}, {year} <UpdateKakapo/> <button onClick={handleDelete}>Delete</button>
      </li>
    </ul>
    </>
  )
}

export default Kakapo