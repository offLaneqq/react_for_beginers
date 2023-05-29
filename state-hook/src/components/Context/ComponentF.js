import React from 'react'
import { ChannelContainer, UserContainer } from '../../App'

function ComponentF() {
  return (
    <UserContainer.Consumer>
        {user => {
            return (
                <ChannelContainer.Consumer>
                    {surname => {
                        return (<div>name - {user}, surname - {surname} </div>)
                    }}
                </ChannelContainer.Consumer>
            )
         }}
    </UserContainer.Consumer>
)
}

export default ComponentF