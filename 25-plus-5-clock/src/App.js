import './App.css';
import React, { Component } from 'react'
import TimerLengthControl from './components/TimerLengthControl';
import AccurateInterval from './components/AccurateInterval';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: {color: 'white'}
    }
  }

  lengthControl = (stateToChange, sign, currentLength, timerType) => {
    if (this.state.timerState === 'running') {
      return
    }
    if (this.state.timerType === timerType) {
      if (sign === '-' && currentLength !== 1) {
        this.setState({
          [stateToChange]: currentLength - 1
        })
      } else if (sign === '+' && currentLength !== 60) {
        this.setState({
          [stateToChange]: currentLength + 1
        })
      }
    } else if (sign === '-' && currentLength !== 1) {
      this.setState({
        [stateToChange]: currentLength - 1,
        timer: currentLength * 60 - 60          // need to translate from 1,2,3,4(clicks) to minutes
      })
    } else if (sign === '+' && currentLength !== 60) {
      this.setState({
        [stateToChange]: currentLength + 1,
        timer: currentLength * 60 + 60
      })
    }
  }

  setBreakLength = e => {
    this.lengthControl(
      'breakLength',
      e.currentTarget.value,
      this.state.breakLength,
      'Session'
    )
  }

  setSessionLLength = e => {
    this.lengthControl(
      'sessionLength',
      e.currentTarget.value,
      this.state.sessionLength,
      'Break'
    )
  }

  decrementTimer = () => {
    this.setState({timer: this.state.timer - 1})
  }

  warning = (_timer) => {
    if (_timer < 61) {
      this.setState({alarmColor: {color: '#a50d0d'}})
    } else {
      this.setState({alarmColor: {color: 'white'}})
    }
  }

  buzzer = (_timer) => {
    if (_timer === 0) {
      this.audioBeep.play()
    }
  }

  switchTimer = (num, str) => {
    this.setState({
      timer: num,
      timerType: str,
      alarmColor: {color: 'white'}
    })
  }

  phaseControl = () => {
    let timer = this.state.timer
    this.warning(timer)
    this.buzzer(timer)
    if (timer < 0) {
      if (this.state.intervalID) {
        this.state.intervalID.cancel()
      }
      if (this.state.timerType === 'Session') {
        this.beginCountDown()
        this.switchTimer(this.state.breakLength * 60, 'Break')
      } else {
        this.beginCountDown()
        this.switchTimer(this.state.sessionLength * 60, 'Session')
      }
    }
  }

  beginCountDown = () => {
    this.setState({
      intervalID: AccurateInterval(() => {
        this.decrementTimer()
        this.phaseControl()
      }, 1000)
    })
  }

  timerControl = () => {
    if (this.state.timerState === 'stopped') {
      this.beginCountDown()
      this.setState({timerState: 'running'})
    } else {
      this.setState({timerState: 'stopped'})
      if (this.state.intervalID) {
        this.state.intervalID.cancel()
      }
    }
  }

  clockify = () => {
    if (this.state.timer < 0) return '00:00'
    let minutes = Math.floor(this.state.timer / 60)
    let seconds = this.state.timer - minutes * 60
    seconds = seconds < 10 ? '0' + seconds: seconds
    minutes = minutes < 10 ? '0' + minutes: minutes
    return minutes + ':' + seconds 
  }

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: {color: 'white'}
    })
    if (this.state.intervalID) {
      this.state.intervalID.cancel()
    }
    this.audioBeep.pause()
    this.audioBeep.currentTime = 0
  }

  render() {
    return (
      <div>
        <div className='main-title'>25 + 5 Clock</div>
        <TimerLengthControl />
        <TimerLengthControl />
      </div>
    )
  }
}

export default App