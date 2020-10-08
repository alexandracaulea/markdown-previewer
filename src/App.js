import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const placeholderText = `# Type something

Type on the **left**, and see it rendered on the **right**.

This is a [link](https://github.com/alexandracaulea/markdown-previewer) to the repository.
`;

export default function App() {
  const [textareaValue, setTextareaValue] = useState(placeholderText);
  return (
    <>
      <header>
        <h1 className="App-heading">Markdown Previewer</h1>
      </header>
      <div className="App-container">
        <Editor
          textareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
        />
        <Preview textareaValue={textareaValue} />
      </div>
    </>
  );
}
