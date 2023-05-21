import React from 'react'

function Person({name}) {
  return (
    <div>
      <h1>My name is {name.name} and surname is {name.surname}. My age is {name.age}</h1>
    </div>
  )
}

export default Person