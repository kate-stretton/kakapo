import React, { useEffect } from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {fetchKakapo} from '../actions'
import AddKakapo from './AddKakapo'
import Kakapo from './Kakapo'
import Header from './Header'
import Footer from './Footer'


function App () {
  // Display the redux state
  const kakapo=useSelector((state) => state.kakapo)
  // need to define dispatch - dispatch the thunk when page loaders
  const dispatch = useDispatch()

  // useEffect so we only render list of Kakapo once
  useEffect(() => {
    dispatch(fetchKakapo())
    // fetching the kakapo via actions/index.js
  }, [])
  
  return (
    <>
    <Header/>
      <section className="main">
      {/* map through all kakapo in the data base and send info for each to Kakapo component as props */}
      {kakapo.map((k) => (
        <Kakapo key={k.id} id={k.id} name={k.name} year={k.hatchYear}/>
        ))}   
        <AddKakapo/>  
      </section>
      <Footer/>
    </>
  )
}

export default App
