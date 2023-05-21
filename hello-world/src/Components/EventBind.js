import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
    }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind