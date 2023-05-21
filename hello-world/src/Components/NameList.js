import React from 'react'
// import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Antony', 'Jayson']
    // const names = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         surname: 'Wayne',
    //         age: 45
    //     }, 
    //     {
    //         id: 2,
    //         name: 'Antony',
    //         surname: 'Show',
    //         age: 32
    //     },
    //     {
    //         id: 3,
    //         name: 'Jayson',
    //         surname: 'Stathem',
    //         age: 56
    //     }
    //  ]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
  return (
      <div>{nameList}</div>
      )
}

export default NameList