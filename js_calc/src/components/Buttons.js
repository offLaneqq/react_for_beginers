import React, { Component } from 'react'

export class Buttons extends Component {
  render() {
    return (
      <div>
        <button
            id='clear'
            className='jumbo'
            onClick={this.props.initialize}
            value='AC'>AC</button>
        <button
            onClick={this.props.operators}
            value='/'>/</button>
        <button
            onClick={this.props.operators}
            value='*'>x</button>
        <button
            onClick={this.props.numbers}
            value='7'>7</button>
        <button
            onClick={this.props.numbers}
            value='8'>8</button>
        <button
            onClick={this.props.numbers}
            value='9'>9</button>
        <button
            onClick={this.props.operators}
            value='-'>-</button>
        <button
            onClick={this.props.numbers}
            value='4'>4</button>
        <button
            onClick={this.props.numbers}
            value='5'>5</button>
        <button
            onClick={this.props.numbers}
            value='6'>6</button>
        <button
            onClick={this.props.operators}
            value='+'>+</button>
        <button
            onClick={this.props.numbers}
            value='1'>1</button>
        <button
            onClick={this.props.numbers}
            value='2'>2</button>
        <button
            onClick={this.props.numbers}
            value='3'>3</button>
        <button
            className='jumbo'
            onClick={this.props.numbers}
            value='0'>0</button>
        <button
            onClick={this.props.decimal}
            value='.'>.</button>
        <button
            className='equals'
            onClick={this.props.evaluate}
            value='='>=</button>
      </div>
    )
  }
}

export default Buttons