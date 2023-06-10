import React, { Component } from 'react'
import Formula from './components/Formula'
import Output from './components/Output'
import Buttons from './components/Buttons'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
    }
  } 
  render() {
    return (
      <div>
        <Formula />
        <Output />
        <Buttons />
      </div>
    )
  }
}

export default App