import React from 'react'

export default function SortMenu({handleSort}) {

  return (
    <div className ='sortMenu'>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="id">Sort</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}
