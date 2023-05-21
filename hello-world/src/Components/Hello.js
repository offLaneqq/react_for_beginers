import React from 'react'

// Without JSX

const Hello = () => {
    return React.createElement('div', {className: 'hello world'}, 
           React.createElement('h1', null, 'Hello, brother'))
}

export default Hello