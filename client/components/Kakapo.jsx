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
    <div className='kakapo'>
      <img src='../images/kakapo.jpeg' alt='kakapo'/>
    <ul>
      <li>
        {name}, {year} <UpdateKakapo id={id} name={name} hatchYear={year}/> <button onClick={handleDelete}>Delete</button>
      </li>
    </ul>
    </div>
  )
}

export default Kakapo