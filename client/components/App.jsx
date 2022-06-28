import React, { useEffect } from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {fetchKakapo} from '../actions'

import Kakapo from './Kakapo'

function App () {

  const kakapo=useSelector((state) => state.kakapo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchKakapo())
  }, [])
  
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
      {kakapo.map((k) => (
        <Kakapo key={k.id} id={k.id} name={k.name} year={k.hatchYear}/>
        ))}     
      </section>
    </>
  )
}

export default App
