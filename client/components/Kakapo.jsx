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
    <div className ='kakapo-card'>
      <img src='../images/kakapo.jpeg' alt='kakapo'/>
      <h3>{name}</h3>
      <p>Hatch year: {year}</p>
      <UpdateKakapo id={id} name={name} hatchYear={year}/> <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Kakapo