import React from 'react'

function Person({person}) {
  return (
    <div>      
        <h1>
            Candidate id {person.id} name {person.name}
        </h1>
    </div>
  )
}

export default Person