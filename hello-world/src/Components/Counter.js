import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }

    Increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

  render() {
    return (
      <div>
        <p>Counter - {this.state.count}</p>
        <button onClick={this.Increment}>Increment</button>
      </div>
    )
  }
}

export default Counter