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

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = event => {
    const key = event.key;
    const code = event.code;
    if (/\d|[*/+-.]|Backspace/.test(key) || key === "Enter") {
      event.preventDefault(); // Забороняємо виконання дії за замовчуванням, пов'язаної з клавішею
      if (/\d/.test(key)) {
        this.handleNumbers({ target: { value: key } });
      } else if (/[*/+-.]/.test(key)) {
        this.handleOperators({ target: { value: key } });
      } else if (key === '.') {
        this.handleDecimal();
      } else if (key === 'Enter') {
        this.handleEvaluate();
      } else if (key === 'Backspace') {
        this.initialize();
      }
    }
    else if (code === 'F1' || code === 'F2' || key === 'Tab') {
        // Виключення для службових клавіш (F1, F2, Tab)
        event.preventDefault();
    }
  };

    isOperator = /[x/+-]/                  // Search all operators in string
        endWithOperator = /[x/+-]$/              // Search all operators in end of string
        endWithNegativeSign = /\d[x/+-]{1}-$/     // Search one number with proposed sign and then with minus in the end of string

    maxDigitWarning = () => {
        this.setState({
            currentVal: 'Digit Limit Met',
            prevVal: this.state.currentVal
        })
        setTimeout(() => this.setState({currentVal: this.state.prevVal}), 1000)
    }

    handleNumbers = e => {
        if (!this.state.currentVal.includes('Limit')) {
            const {currentVal, formula, evaluated} = this.state
            const value = e.target.value
            this.setState({evaluated: false})
            if (currentVal.length > 21) {
                this.maxDigitWarning()                       // catch err with length
            } else if (evaluated) {
                this.setState({
                    currentVal: value,
                    formula: value !== '0' ? value : '' // show value in top string if value != '0'
                })
            } else {
                this.setState({
                    currentVal: currentVal === '0' || this.isOperator.test(currentVal) ? value : currentVal + value,
                    formula: currentVal === '0' && value === '0' 
                    ? formula === '' ? value : formula : /([^.0-9]0|^0)$/.test(formula)
                    ? formula.slice(0, -1) + value : formula + value 
                })
            }
        }
    } 

    handleOperators = e => {
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
            } else if (!this.endWithNegativeSign.test(formula)) {
                this.setState({
                    prevVal: formula,
                    formula: formula + value
                })
            } else if (!this.endWithNegativeSign.test(formula)) {
                this.setState({
                    formula: (this.endWithNegativeSign.test(formula + value) ? formula : prevVal) + value
                })
            } else if (value !== '-') {
                this.setState({formula: prevVal + value})
            }
        }
    }

    handleEvaluate = () => {
        if (!this.state.currentVal.includes('Limit') && this.state.evaluated !== true) {
            let expression = this.state.formula
            while (this.endWithOperator.test(expression)) {
                expression = expression.slice(0, -1)
            }
            expression = expression
                // .replace(/x/g, '*')
                .replace(/-/g, '-')
                .replace(/--/, '+0+0+0+0+0+0+')
            // eslint-disable-next-line
            let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000
            this.setState({
                currentVal: answer.toString(),
                formula: expression
                    // .replace(/\*/g, '⋅')
                    .replace(/-/g, '-')
                    .replace('+0+0+0+0+0+0+', '--')
                    .replace(/(x|\/|\+)-/, '$1-')
                    .replace(/^-/, '-') + '=' + answer,
                prevVal: answer,
                evaluated: true
            })
        }
    }

    handleDecimal = () => {
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
            } else if (this.endWithOperator.test(this.state.formula) || 
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

    initialize = () => {
        this.setState({
            currentVal: '0',
            prevVal: '0',
            formula: '',
            currentSign: 'pos',
            evaluated: false
        })
    }


  render() {
    
    return (
      <div className='calculator'>
        {/* <Formula formula={this.state.formula.replace(/x/g, '⋅')}/> */}
        <Formula formula={this.state.formula}/>
        <Output currentValue={this.state.currentVal}/>
        <Buttons numbers={this.handleNumbers}
                operators={this.handleOperators}
                initialize={this.initialize}
                decimal={this.handleDecimal}
                evaluate={this.handleEvaluate}/>
      </div>
    )
  }
}


export default App