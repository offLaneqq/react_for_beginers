import React, { Component } from 'react'

export class TimerLengthControl extends Component {
  render() {
    return (
      <div className='length-control'>
        <div>{this.props.title}</div>
        <button 
          onClick={this.props.onClick}
          id={this.props.minID}
          value='-' >-</button>
        <div>{this.props.length}</div>
        <button 
          onClick={this.props.onClick}
          id={this.props.addID}
          value='+' >+</button>
      </div>
    )
  }
}

export default TimerLengthControl