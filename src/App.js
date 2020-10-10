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
