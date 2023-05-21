import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
  render() {
    const {count, clickHandler} = this.props
    return (
      <div>
        <button onClick={clickHandler}>
          Clicked {count} Times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)