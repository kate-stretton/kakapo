import React, {useState} from 'react'
//import {useDispatch} from 'react-redux'
//import {updateKakapo} from '../actions'

function UpdateKakapo({name}) {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  // const [newName, setNewName] = useState(name)
  // const dispatch = useDispatch()

  function showForm(e){
    e.preventDefault()
    setShowUpdateForm(true)
  }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   //dispatch(updateKakapo(name, newName))
  //   setNewName('')
  // }

  // function handleChange(e){
  //   setNewName(e.target.value)
  // }

  return (
    <>
    <button onClick={showForm}
    >Update {name}</button>
      {showUpdateForm && (
      <form>
        <label htmlFor='updatedName'>Update name: </label>  
        <input type='text' id ='updatedName' name='updatedName'  />
        <button type='submit'>Update</button>
    </form>)}
    </>
  )
}

export default UpdateKakapo