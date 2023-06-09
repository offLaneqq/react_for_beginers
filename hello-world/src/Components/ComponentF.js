import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
          <div>
            <h2>Hello, {username}</h2>
          </div>
          )
        }}
      </UserConsumer>
    )
  }
}

export default ComponentF