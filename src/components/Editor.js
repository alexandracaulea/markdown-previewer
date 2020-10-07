import React from 'react';

export function Editor({ textareaValue, setTextareaValue }) {
  return (
    <textarea
      id="editor"
      value={textareaValue}
      onChange={(e) => setTextareaValue(e.target.value)}
      rows={20}
      cols={100}
    />
  );
}
