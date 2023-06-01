import './App.css';
import React, {Component}  from 'react'
// --------- for function uncomment line under that line ---------
// import React, {useEffect, useState} from 'react';
import DrumPad from './components/DrumPad';
import audios from './data';

export class App extends Component {
  constructor() {
    super()

    this.state = {
      display: '',
      volume: 1
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress = event => {
    const keyPress = event.key.toUpperCase()
    const elementPressed = document.getElementById(keyPress).parentElement
    elementPressed.click()
  }

  handleClick = (event) => {
    //element, audio from element, display from audio id
    const element = event.target
    const audio = element.querySelector('audio')
    const display = audios[audio.id].displayText
    element.classList.toggle('drum-pad-active')
    setTimeout(() => {
      element.classList.toggle('drum-pad-active')
    }, 100)
    this.handleDisplay(display)
    this.handlePlay(audio)
  }
  
    handleDisplay = param => {
      this.setState({
        display: param
      })
      // console.log(this.display)
    }
  
    handlePlay = (audio) => {
      audio.currentTime = 0
      audio.volume = 1
      audio.play()
    }
    render() {
      const drumPad = Object.values(audios).map(audio => 
      <DrumPad keypad={audio} key={audio.keypad} onClick={this.handleClick}/>)
    return (
      <div id='main'>
        <div id='header'>
          <ul>
            <li>
              <h3>Drum Machine</h3>
            </li>
            <li>X</li>
          </ul>
        </div>
        <div id='drum-machine'>
        <div id='container-bank'>
        {drumPad}
        </div>
        <div id='container-interface'>
          <h1 id='display'>{this.state.display}</h1>
        </div>
      </div>
      </div>
    )
  }
}

// -------------------------- SAME CODE WITH USING FUNCTION --------------------------

// function App() {
//     // eslint-disable-next-line
//     var [display, setDisplay] = useState('')
    
//     useEffect(() => {
//       document.addEventListener('keydown', handleKeyPress)

//       // return(
//       //   document.removeEventListener('keydown', handleKeyPress)
//       // )
//     }, [])

//     const handleKeyPress = (event) => {
//       const keyPress = event.key.toUpperCase()
//       const elementPressed = document.getElementById(keyPress).parentElement
//       elementPressed.click()
//     }
  
//     const handleClick = (event) => {
//       //element, audio from element, display from audio id
//       const element = event.target
//       const audio = element.querySelector('audio')
//       const display = audios[audio.id].displayText
//       element.classList.toggle('drum-pad-active')
//       setTimeout(() => {
//         element.classList.toggle('drum-pad-active')
//       }, 100)
//       console.log(display)
//       handleDisplay(display)
//       handlePlay(audio)
//     }
  
//     const handleDisplay = (param) => {
//       setDisplay(param)
//       // console.log(display)
//     }
  
//     const handlePlay = (audio) => {
//       audio.currentTime = 0
//       audio.volume = 1
//       audio.play()
//     }

//     const drumPad = Object.values(audios).map(audio => 
//       <DrumPad keypad={audio} key={audio.keypad} onClick={handleClick}/>)
//     return (
//       <div id='drum-machine'>
//         <div id='container-bank'>
//         {drumPad}
//         </div>
//         <div id='container-interface'>
//           <h1 id='display'>{display}</h1>
//         </div>
//       </div>
//     )
//   }

export default App

