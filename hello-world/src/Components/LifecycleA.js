import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'Vishwas'  
      }
      console.log('LifecycleA constr')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate() {
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        name: 'Codevolution'
      })
    }

    render() {
    console.log('LifeCycleA render()') 
    return (
      <div>
        LifeCycleA
        <div><button onClick={this.changeState}>Change state</button></div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA