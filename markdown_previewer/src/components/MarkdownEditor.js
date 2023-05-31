import React from 'react'

function MarkdownEditor({text, onChange}) {
  return (
    <div id='container' className='editor-container'>
      <div id='header'>
        <ul>
        <li>MarkdownEditor</li>
        <li>X</li>
        </ul>
      </div>
        <textarea
            onChange={onChange}
            value={text}
            id='editor'
        ></textarea>
    </div>
  )
}

export default MarkdownEditor