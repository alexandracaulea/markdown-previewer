import React from 'react';

export default function Editor({ textareaValue, handleChange }) {
  return (
    <textarea
      id="editor"
      value={textareaValue}
      onChange={handleChange}
      rows={20}
      cols={100}
    />
  );
}
