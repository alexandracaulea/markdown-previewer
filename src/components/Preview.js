import React from 'react';
import marked from 'marked';

export default function Preview({ textareaValue }) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(textareaValue) }}
    />
  );
}
