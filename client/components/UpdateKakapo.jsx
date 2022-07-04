import React, {useState} from 'react'

function UpdateKakapo() {
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  function showForm(e){
    e.preventDefault()
    setShowUpdateForm(true)
  }

  return (
    <>
    <button onClick={showForm}
    >Update Kakapo</button>
      {showUpdateForm && (<form><input/></form>)}
    </>
  )
}

export default UpdateKakapo