import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('Artur')}>Greet Parent!</button>
    </div>
  )
}

export default ChildComponent