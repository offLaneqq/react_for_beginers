import React, { useState } from 'react';
import marked from 'marked';

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState('');

    const handleInputChange = (e) => {
        setMarkdown(e.target.value);
    }

    const getMarkdownHtml = () => {
        return {__html: marked(markdown)}
    }

    return (
        <div>
            <div className='editor-container'>
                <textarea className='editor'
                          value = {markdown}
                          onChange = {handleInputChange}
                ></textarea>
            </div>
            <div className='preview-container'>
                <h2>Preview</h2>
                <div className='preview' dangerouslySetInnerHTML={getMarkdownHtml()}>
                </div>
            </div>
        </div>
    )

}

export default MarkdownPreviewer;