import React, { Component } from 'react'

export class TimerLengthControl extends Component {
  render() {
    return (
      <div className='length-control'>
        <button>-</button>
        <button>+</button>
      </div>
    )
  }
}

export default TimerLengthControl