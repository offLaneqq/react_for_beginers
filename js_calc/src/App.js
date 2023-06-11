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
    const isOperator = /[x/+-]/,                  // Search all operators in string
        endWithOperator = /[x/+-]$/,              // Search all operators in end of string
        endWithNegativeSign = /\d[x/+-]{1}-$/     // Search one number with proposed sign and then with minus in the end of string

    const maxDigitWarning = () => {
        this.setState({
            currentVal: 'Digit Limit Met',
            prevVal: this.state.currentVal
        })
        setTimeout(() => this.setState({currentVal: this.state.prevVal}), 1000)
    }

    const handleNumbers = e => {
        if (!this.state.currentVal.includes('Limit')) {
            const {currentVal, formula, evaluated} = this.state
            const value = e.target.value
            this.setState({evaluated: false})
            if (currentVal.length > 21) {
                maxDigitWarning()                       // catch err with length
            } else if (evaluated) {
                this.setState({
                    currentVal: value,
                    formula: value !== '0' ? value : '' // show value in top string if value != '0'
                })
            } else {
                this.setState({
                    currentVal: currentVal === 0 || isOperator.test(currentVal) ? value : currentVal + value,
                    formula: currentVal === '0' && value === '0' 
                    ? formula === '' ? value : formula : /([^.0-9]0|^0)$/.test(formula)
                    ? formula.slice(0, -1) + value : formula + value 
                })
            }
        }
    } 

    const handleOperators = e => {
        if (!this.state.currentSign.includes('Limit')) {
            const value = e.target.value
            const {formula, currentVal, evaluated} = this.state
            this.setState({
                currentVal: value,
                evaluated: false
            })
            if (evaluated) {
                this.setState({
                    formula: this.prevVal + value
                })
            } else if (!endWithNegativeSign.test(formula)) {
                this.setState({
                    prevVal: formula,
                    formula: formula + value
                })
            } else if (!endWithNegativeSign.test(formula)) {
                this.setState({
                    formula: (endWithNegativeSign.test(formula + value) ? formula : this.prevVal) + value
                })
            } else if (value !== '-') {
                this.setState({formula: this.prevVal + value})
            }
        }
    }

    return (
      <div className='calculator'>
        <Formula />
        <Output />
        <Buttons numbers={handleNumbers}/>
      </div>
    )
  }
}


export default App