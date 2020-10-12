import React, { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const placeholderText = `**Markdown syntax guide**

### Headings

To create a heading, add between 1 and 6 \`#\` in front of the word or phrase. The \`#\` will correspond to the heading level.

# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

### Paragraphs

To create a paragraph, use a blank line to separate one or more lines of text.

### Line Breaks

To create a line break, end a line with two or more spaces, and then press return/enter.

This is the first line.  
This is the second line

### Emphasis

To italicize a word or a phrase, add one asterisk or underscore before and after a word or phrase.

*This text will be italic.*

_This text will also be italic._

To bold a word or a phrase, add two asterisks or underscores before and after a word or phrase.

**This text will be bold.**

__This text will also be bold.__

### Blockquotes

To create a blockquote, add a > in front of a paragraph. If you need to have a blockquote with multiple paragraphs you can add a > on the blank lines between the paragraphs.

If you need to nest blockquotes, add a >> in front of the paragraph you want to nest.

> Markdown is intended to be as easy-to-read and easy-to-write as is feasible.
>
> Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.
>

### Lists

- You can organize items into unordered and ordered lists.

#### Unordered Lists

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items.

- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
- Item 3


#### Ordered Lists

To create an ordered list, add numbers followed by perios and the line items.

1. Item 1
2. Item 2
3. Item 3
  1. Item 3.1
  2. Item 3.2
4. Item 4

### Code Blocks

Are normally indented four spaces or one tab.  
You can wrap your code with \`\`\` to create a code block, and by adding an optional language your code will get syntax highlighting.  
You can indent every line of the block by at least four spaces or one tab.

\`\`\`js
console.log("Hello world!");
\`\`\`

    <html>
      <head></head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>

### Horizontal Rules

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line.

***

### Images

To add an image, add an exclamation mark (!), followed by an alt text in brackets, and the path or URL to the image asset.

![Logo](https://res.cloudinary.com/alexandracaulea/image/upload/v1602354372/logo_kkwfn6.png)

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses

[![Netlify Status](https://api.netlify.com/api/v1/badges/4f96a8ed-8cd8-437e-8179-0f654debd772/deploy-status)](https://app.netlify.com/sites/markdown-previewer-project/deploys)

### Links

To create a link, enclose the link text in brackets, and then follow it immediately with the URL in parentheses.  
To add a title, enclose it in parentheses after the URL.

This is a [link](https://github.com/alexandracaulea/markdown-previewer) to the repository.

You can read more about Markdown [here](https://www.markdownguide.org/basic-syntax "Markdown Guide").

### URLs and Email Addresses

To turn a URL or email address into a link, enclose it in angle brackets.

<https://daringfireball.net/projects/markdown/syntax>  
<yourname@example.com>

### Task Lists

- [x] this is a complete item  
- [ ] this is an incomplete item  

### Tables

| Header   | Header   |
| -------- |:--------:|
| Content  | Content  |

`;

export default function App() {
  const [textareaValue, setTextareaValue] = useState(placeholderText);
  return (
    <>
      <a
        className="App-github-link"
        href="https://github.com/alexandracaulea/markdown-previewer"
        aria-label="View source on GitHub"
      >
        <span className="screen-reader-text">View source on GitHub</span>
        <svg
          viewBox="0 0 250 250"
          fill="#6f4a8e"
          width="4.375em"
          height="4.375em"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            className="App-github-octo-arm"
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="#f9f9f9"
          />
        </svg>
      </a>
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
