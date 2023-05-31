import React from 'react'

function MarkdownPreviewer({text, onChange}) {
  return (
    <div id='container' className='preview-container'>
      <div id='header'>
        <ul>
        <li>MarkdownPreviewer</li>
        <li>X</li>
        </ul>
      </div>
        <div 
            id='preview'
            onChange={onChange}
            dangerouslySetInnerHTML={{__html: text}}>
        </div>
    </div>
  )
}

export default MarkdownPreviewer