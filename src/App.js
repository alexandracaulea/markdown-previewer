import React, { useState } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import './App.css';

const placeholderText = `
# Markdown Preview

## Type something

Type on the **left**, and see it rendered on the **right**

This is a [link](https://github.com/alexandracaulea/markdown-previewer) to the repository.
`;

export default function App() {
  const [textareaValue, setTextareaValue] = useState(placeholderText);
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <Editor
        textareaValue={textareaValue}
        setTextareaValue={setTextareaValue}
      />
      <Preview textareaValue={textareaValue} />
    </div>
  );
}
