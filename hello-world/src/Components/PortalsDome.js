import React from 'react'
import ReactDOM  from 'react-dom'

function PortalsDome() {
  return ReactDOM.createPortal(
    <h1>PortalsDome</h1>,
    document.getElementById('portal-root')
  )
}

export default PortalsDome