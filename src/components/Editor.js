import React from 'react';
import './Editor.css';

export default function Editor({ textareaValue, setTextareaValue }) {
  return (
    <textarea
      id="editor"
      spellCheck="false"
      className="Editor"
      value={textareaValue}
      onChange={(e) => setTextareaValue(e.target.value)}
    />
  );
}
