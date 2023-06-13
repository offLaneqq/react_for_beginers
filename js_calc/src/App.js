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
                    currentVal: currentVal === '0' || isOperator.test(currentVal) ? value : currentVal + value,
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
            const {formula, prevVal, evaluated} = this.state
            this.setState({
                currentVal: value,
                evaluated: false
            })
            if (evaluated) {
                this.setState({
                    formula: prevVal + value
                })
            } else if (!endWithNegativeSign.test(formula)) {
                this.setState({
                    prevVal: formula,
                    formula: formula + value
                })
            } else if (!endWithNegativeSign.test(formula)) {
                this.setState({
                    formula: (endWithNegativeSign.test(formula + value) ? formula : prevVal) + value
                })
            } else if (value !== '-') {
                this.setState({formula: prevVal + value})
            }
        }
    }

    const handleEvaluate = () => {
        if (!this.state.currentVal.includes('Limit')) {
            let expression = this.state.formula
            while (endWithOperator.test(expression)) {
                expression = expression.slice(0, -1)
            }
            expression = expression
                .replace(/x/g, '*')
                .replace(/-/g, '-')
                .replace(/--/, '+0+0+0+0+0+0+')
            // eslint-disable-next-line
            let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000
            this.setState({
                currentVal: answer.toString(),
                formula: expression
                    .replace(/\*/g, '⋅')
                    .replace(/-/g, '-')
                    .replace('+0+0+0+0+0+0+', '--')
                    .replace(/(x|\/|\+)-/, '$1-')
                    .replace(/^-/, '-') + '=' + answer,
                prevVal: answer,
                evaluated: true
            })
        }
    }

    const handleDecimal = () => {
        if (this.state.evaluated === true) {
            this.setState({
                currentVal: '0.',
                formula: '0.',
                evaluated: false
            })
        } else if (
            !this.state.currentVal.includes('.') &&
            !this.state.currentVal.includes('Limit')) {
                this.setState({ evaluated: false })
            if (this.state.currentVal.length > 21) {
                this.maxDigitWarning()
            } else if (endWithOperator.test(this.state.formula) || 
                (this.state.currentVal === '0' && this.state.formula === '')) {
                    this.setState({
                        currentVal: '0.',
                        formula: this.state.formula + '0.'
                    })
                } else {
                    this.setState({
                        currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
                        formula: this.state.formula + '.'
                    })
                }
            }
    }

    const initialize = () => {
        this.setState({
            currentVal: '0',
            prevVal: '0',
            formula: '',
            currentSign: 'pos',
            evaluated: false
        })
    }

    return (
      <div className='calculator'>
        <Formula formula={this.state.formula.replace(/x/g, '⋅')}/>
        <Output currentValue={this.state.currentVal}/>
        <Buttons numbers={handleNumbers}
                operators={handleOperators}
                initialize={initialize}
                decimal={handleDecimal}
                evaluate={handleEvaluate}/>
      </div>
    )
  }
}


export default App