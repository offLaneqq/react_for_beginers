import React, { Component } from 'react'
import Stylesheet from './Stylesheet'

export class Button extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        binary: false
      }
      this.Click = this.Click.bind(this)
    }

    Click() {
        this.setState(prevState => ({
            binary: !prevState.binary
        }))
        console.log(this.state)
    }

  render() {
    return (
        <div>
            <Stylesheet primary={this.state.binary}/>
            <button onClick={this.Click}>{this.state.binary ? 'Green' : 'Purple'}</button>
        </div>
    )
  }
}

export default Button