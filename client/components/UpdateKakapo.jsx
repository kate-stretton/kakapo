import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {newNameKakapo} from '../actions'

function UpdateKakapo({id, year}) {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [showUpdateButton, setShowUpdateButton] = useState(true)
  const [newName, setNewName] = useState('')
  const dispatch = useDispatch()

  function showForm(e){
    e.preventDefault()
    setShowUpdateForm(true)
    setShowUpdateButton(false)
  }

  function handleSubmit(e) {
    console.log('component:', id, newName)
    e.preventDefault()
    dispatch(newNameKakapo({id: id, name: newName, year: year}))
    setNewName('')
  }

  function handleChange(e){
    setNewName(e.target.value)
  }

  return (
    <>
    <button onClick={showForm}
    >Update</button>
      {showUpdateForm && (
        <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='updatedName'>Update name: </label>  
        <input type='text' id ='updatedName' name='updatedName' value={newName.name} onChange={handleChange} />
        {showUpdateButton && (
        <button type='submit'>Update</button>)}
    </form></div>)}
    </>
  )
}

export default UpdateKakapo