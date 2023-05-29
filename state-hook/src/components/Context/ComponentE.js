import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { ChannelContainer, UserContainer } from '../../App'

function ComponentE() {

  const user = useContext(UserContainer)
  const channel = useContext(ChannelContainer)
  return (
    <div>
        {/* <ComponentF /> */}
        {user} - {channel}
    </div>
  )
}

export default ComponentE