import React from 'react'

export default function Search({handleSearch}) {
  return (
    <div className='search'>
    <input onChange={(e) => handleSearch(e.target.value)}type="text" placeholder="Search for a kakapo"/>
    </div>
  )
}


