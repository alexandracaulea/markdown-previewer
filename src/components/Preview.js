import React from 'react';
import DOMPurify from 'dompurify';
import marked from 'marked';
import './Preview.css';

export default function Preview({ textareaValue }) {
  const clean = DOMPurify.sanitize(textareaValue);
  return (
    <div
      id="preview"
      className="Preview"
      dangerouslySetInnerHTML={{
        __html: marked(clean, { breaks: true }),
      }}
    />
  );
}
