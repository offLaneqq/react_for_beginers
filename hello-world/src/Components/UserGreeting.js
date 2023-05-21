import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogin: true
      }
    }

  render() {

    return this.state.isLogin && <div>Welcome Vishwas</div>

    // return this.state.isLogin ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // )
  }
}

export default UserGreeting