import React, {useState} from 'react'
import HookMouse from '../Effect/HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(false)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Show display</button>
        {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer