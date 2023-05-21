import React from 'react'

function ClickHandler() {

    function handleClick() {
        console.log('Clicked')
    }
    
  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ClickHandler