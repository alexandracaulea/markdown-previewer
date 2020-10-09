import React, { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const placeholderText = `**Markdown syntax guide**

### Headers

# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

### Emphasis

*This text will be italic.*

_This text will also be italic._

**This text will be bold.**

__This text will also be bold.__

### Lists

#### Unordered

- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
- Item 3


#### Ordered

1. Item 1
2. Item 2
3. Item 3
  1. Item 3.1
  2. Item 3.2
4. Item 4

#### Blockquotes

> Markdown is intended to be as easy-to-read and easy-to-write as is feasible.
>
> Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.
>

#### Images and Links

[![Netlify Status](https://api.netlify.com/api/v1/badges/4f96a8ed-8cd8-437e-8179-0f654debd772/deploy-status)](https://app.netlify.com/sites/markdown-previewer-project/deploys)

This is a [link](https://github.com/alexandracaulea/markdown-previewer) to the repository.
`;

export default function App() {
  const [textareaValue, setTextareaValue] = useState(placeholderText);
  return (
    <>
      <Header />
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
