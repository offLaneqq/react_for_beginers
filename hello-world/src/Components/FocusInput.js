import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef = this.componentRef.current.inputFocus()
    }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>FocusInput</button>
      </div>
    )
  }
}

export default FocusInput