import React from 'react'
import './css/styles.css'

function Stylesheet(props) {
    const className = props.primary ? 'primary' : 'yellow'
  return (
    <div>
        <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
