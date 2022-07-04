import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {saveKakapo} from '../actions'

function AddKakapo () {
  const [newKakapo, setNewKakapo] = useState({
    name:'',
    hatchYear: ''
  })
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(saveKakapo(newKakapo))
    setNewKakapo({
      name:'',
      hatchYear:''
    })
  }

  function handleChange(e){
    setNewKakapo({
      ...newKakapo,
      [e.target.name]: e.target.value
    })
  }

  return (
  <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Name: </label>  
    <input type='text' id ='name' name='name' value={newKakapo.name} onChange={handleChange} />
    <label htmlFor='hatchYear'>Hatch year: </label>     
    <input type='number' id='hatchYear' name='hatchYear' value={newKakapo.hatchYear} onChange={handleChange} />
    <button type='submit'>Save</button>
  </form>
  )
}

export default AddKakapo