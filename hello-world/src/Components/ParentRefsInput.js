import React, { Component } from 'react'
import ForwardRefsInput from './ForwardRefsInput'

class ParentRefsInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
        <div>
            <ForwardRefsInput ref={this.inputRef} />
            <button onClick={this.clickHandler}>Focus Input</button>
        </div>
    )
  }
}

export default ParentRefsInput