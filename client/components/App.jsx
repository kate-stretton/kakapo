import React, { useEffect, useState } from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {fetchKakapo} from '../actions'
import AddKakapo from './AddKakapo'
import Kakapo from './Kakapo'
import Header from './Header'
import Search from './Search'
import Footer from './Footer'
import SortMenu from './SortMenu'


function App () {
  const kakapo = useSelector((state) => state.kakapo)

  //Search Kakapo name
  const [kakapoSearch, setKakapoSearch] = useState('')
  const searchedKakapo = kakapo.filter(k => k.name.includes(kakapoSearch))

  //Sort kakapo by name  
  const [kakapoSort, setKakapoSort] = useState('')
  kakapo.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB){
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchKakapo())
  }, [])
  
  return (
    <>
    <Header/>
      <SortMenu handleSort={setKakapoSort}/>
      <Search handleSearch={setKakapoSearch}/>
      <section className="main">
      <div className='kakapo-list'>
      {searchedKakapo.map((k, i) => (
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
