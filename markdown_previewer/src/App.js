import './App.css';
import React, { Component } from 'react'
// import { marked } from 'marked';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import data from './data'
import {marked} from 'marked'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        text: data,
        markedText: marked.parse(data)
    }
  }

  handleChange = (e) => {
    this.setState({
        text: e.target.value,
        markedText: marked.parse(e.target.value)
    })
  }

  render() {
    // console.log(this.state.text)
      return (
          <div>
              <MarkdownEditor text={this.state.text} onChange={this.handleChange}/>
              <MarkdownPreviewer text={this.state.markedText} onChange={this.handleChange}/>
          </div>
      )
  }
}

export default App