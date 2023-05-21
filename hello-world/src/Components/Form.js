import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            username: '',
            comment: '',
            topic: 'Sales'
      }
    }

    usernameChangeHandler = event => {
        this.setState({
            username: event.target.value
        })
    }

    commentChangeHandler = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handlerTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handlerSubmit = event => {
        alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    const {username, comment, topic} = this.state
    return (
        <form onSubmit={this.handlerSubmit}>
            <div>
                <label>Username: </label>
                <input type='text' value={username} onChange={this.usernameChangeHandler}/>
            </div>
            <div>
                <label>Comments: </label>
                <textarea value={comment} onChange={this.commentChangeHandler}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handlerTopicChange}>
                    <option value='IT'>IT</option>
                    <option value='Business'>Business</option>
                    <option value='Sales'>Sales</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
  }
}

export default Form