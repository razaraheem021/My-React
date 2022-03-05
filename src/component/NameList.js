import React from 'react'
import Person from './Person'

function NameList() {
    const Per=[
        {
            id:1,
            name: 'Raza'},
            {
                id:2,
                name: 'John'
            }
    ]
    const names=['Farhan','raza','Manu','Hello']
    // const nameList=Per.map(person =><Person key={person.id} person={person} />)
    const nameList=names.map((name,index) =>(<h1>key={index} {name}</h1>))
  return (
    <div>{nameList}</div>
  )
}

export default NameList