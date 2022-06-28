import React from 'react'

function Kakapo ({id, name, year}) {
  return (
    <>
    <ul>
      <li>
        {id}, {name}, {year}
      </li>
    </ul>
    </>
  )
}

export default Kakapo