import React from 'react';
import marked from 'marked';
import './Preview.css';

export default function Preview({ textareaValue }) {
  return (
    <div
      id="preview"
      className="Preview"
      dangerouslySetInnerHTML={{
        __html: marked(textareaValue, { breaks: true }),
      }}
    />
  );
}
