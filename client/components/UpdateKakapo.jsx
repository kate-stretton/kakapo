import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {newNameKakapo} from '../actions'

function UpdateKakapo({id, name, hatchYear}) {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [hideUpdate, setHideUpdate] = useState(true)
  const initialKakapo = {
    id: id,
    name: name,
    hatchYear: hatchYear
  }

  const [updateKakapo, setUpdateKakapo] = useState(initialKakapo)

  const dispatch = useDispatch()

  function showForm(e){
    e.preventDefault()
    setShowUpdateForm((prev) => !prev)
    setHideUpdate((prev) => !prev)
  }

  function handleSubmit(e) {
    //console.log('component:', id, updateKakapo)
    e.preventDefault()
    dispatch(newNameKakapo(updateKakapo))
    //setUpdateKakapo(initialKakapo)
    setShowUpdateForm((prev) => !prev)
    setHideUpdate((prev) => !prev)
  }

  function handleChange(e){
    setUpdateKakapo({
      ...updateKakapo,
      [e.target.name]: e.target.value,
    }
      )
  }

  return (
    <>
    {hideUpdate && (<button onClick={showForm}
    >Update</button>)}
      {showUpdateForm && (
        <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='updatedName'>Update name: </label>  
        <input type='text' id ='updatedName' name='name' value={updateKakapo.name} onChange={handleChange} />
        <label htmlFor='updatedYear'>Update hatch year: </label>  
        <input type='number' id ='updatedYear' name='hatchYear' value={updateKakapo.hatchYear} onChange={handleChange} />
        <button type='submit'>Update</button>
    </form></div>)}
    </>
  )
}

export default UpdateKakapo