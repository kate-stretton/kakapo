import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {newNameKakapo} from '../actions'

function UpdateKakapo({name}) {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [newName, setNewName] = useState(name)
  const dispatch = useDispatch()

  function showForm(e){
    e.preventDefault()
    setShowUpdateForm(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(newNameKakapo(name, newName))
    setNewName('')
  }

  function handleChange(e){
    setNewName(e.target.value)
  }

  return (
    <>
    <button onClick={showForm}
    >Update {name}</button>
      {showUpdateForm && (
      <form onSubmit={handleSubmit}>
        <label htmlFor='updatedName'>Update name: </label>  
        <input type='text' id ='updatedName' name='updatedName' value={newName.name} onChange={handleChange} />
        <button type='submit'>Update</button>
    </form>)}
    </>
  )
}

export default UpdateKakapo