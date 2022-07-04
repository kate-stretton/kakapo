import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {saveKakapo} from '../actions'

function AddKakapo () {
  const [newKakapo, setNewKakapo] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(saveKakapo(newKakapo))
    setNewKakapo('')
  }

  function handleChange(e){
    const {name, value} = e.target
    setNewKakapo({
      ...newKakapo,
      [name]: value
    })
  }

  return (
  <form onSubmit={handleSubmit}>
    <label>Name: </label>    
    <input value={newKakapo.name} onChange={handleChange} />
    <label>Hatch year: </label>    
    <input value={newKakapo.hatch} onChange={handleChange} />
      <button type='submit'>Save</button>
  </form>
  )
}

export default AddKakapo