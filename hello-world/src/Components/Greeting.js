import React from 'react'

const Greet = (props) => {
    const {name, surname} = props
    return <h1>Hello, {name} {surname}!</h1>
}

export default Greet