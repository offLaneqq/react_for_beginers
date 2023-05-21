import React, { Component } from 'react'

class WelcomeClass extends Component {
    render() {
        const {name, surname} = this.props
        return <h1>Welcome, {name} {surname}!</h1>
    }
}

export default WelcomeClass