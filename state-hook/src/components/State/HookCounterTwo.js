import React, { useState } from 'react'

function HookCounterTwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
  return (
    <div>
        Count = {count} 
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Delete</button>
    </div>
  )
}

export default HookCounterTwo