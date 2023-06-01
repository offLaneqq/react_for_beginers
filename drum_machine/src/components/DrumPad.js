import React from 'react'

function DrumPad(props) {
    const payID = props.keypad.displayText.replace(/\s/g, '_')    
    // reg for change all spaces on symbol underline. It is for id elements
  return (
    <div id={payID} className='drum-pad' onClick={props.onClick}>
        <audio src={props.keypad.audio} id={props.keypad.keypad} className='clip' />
        {props.keypad.keypad}
    </div>
  )
}

export default DrumPad