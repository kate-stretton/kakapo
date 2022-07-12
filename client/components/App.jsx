import React, { useEffect, useState } from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {fetchKakapo} from '../actions'
import AddKakapo from './AddKakapo'
import Kakapo from './Kakapo'
import Header from './Header'
import Search from './Search'
import Footer from './Footer'


function App () {
  // Display the redux state
  const kakapo = useSelector((state) => state.kakapo)
  const [kakapoSearch, setKakapoSearch] = useState('')
  const filteredKakapo = kakapo.filter(k => k.name.includes(kakapoSearch))
  // const sortedKakapo = kakapo.sort((a, b) => {
  //   const nameA = a.name.toUpperCase()
  //   const nameB = b.name.toUpperCase()
  //   if (nameA < nameB){
  //     return -1
  //   }
  //   if (nameA > nameB) {
  //     return 1
  //   }
  //   return 0
  // })
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
      <Search handleSearch={setKakapoSearch}/>
      <section className="main">
      {/* map through all kakapo in the data base and send info for each to Kakapo component as props */}
      <div className='kakapo-list'>
      {filteredKakapo.map((k, i) => (
        <Kakapo key={i} id={k.id} name={k.name} year={k.hatchYear}/>
        ))} 
        </div>
        <div className='add-form'>
          <AddKakapo/>
        </div>    
      </section>
      <Footer/>
    </>
  )
}

export default App
