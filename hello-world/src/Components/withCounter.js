import React, { Component } from 'react'

const withCounter = (WrappedComponent) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          clickHandler = () => {
              this.setState(prevState => {
                  return {count: prevState.count + 1}
              })
          }
        render() {
            return <WrappedComponent count={this.state.count} clickHandler={this.clickHandler}/>
        }
    }
    return WithCounter
}

export default withCounter