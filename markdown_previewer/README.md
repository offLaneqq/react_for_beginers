# Markdown Previewer

It is my second educational project on React. Writed for FreeCodeCamp FrontEnd Development Library Course

## Description

Here is two containers: first container with place for input, where use can write his data and second container with same result, but formated data for markdown. When user input new data - data send in global state in app and then inform second container about need rerender with new formated data. 

## In code are 3 main chapters and 1 optional chapter(w/ data):

### App.js

Here is imported file with data, marked-function and another two main chapters, because it is main file of project. I initialized constructor with state, where are two key: text with clear imported data as argument and markedText with parsed data(marked) as argument.

Then here is function handleChange that update state. When data is changed - keys in state updating and user can see that in both containers.

Then we render in main div two main chapters: MarkdownEditor and MarkdownPreviewer. In first chapter I include two arguments: text(key: text with value) and function, which update data, when it will changed. In second chapter I also include two argument: text(key: markedText with value) and also function.

### MarkdownEditor.js

Here was created main function(rfce) MarkdownEditor, which accept two transferred arguments from App.js - named text and onChange(function). Here also header and textarea.

### MarkdownPreviewer.js
Here also was created main function(rfce) MarkdownPreviewer, which accept two transferred arguments from App.js - named text and onChange(function). The difference from MarkdownEditor is property dangerouslySetInnerHTML with argument {{\_\_html: text}} (text is accepted argument from App.js). DangerouslySetInnerHTML is React innerHtml.

### data.js

Here in imported const with data from FreeCodeCamp
