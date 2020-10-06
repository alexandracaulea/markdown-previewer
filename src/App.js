import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const placeholderText = `
# Markdown Preview

## Type something

Type on the **left**, and see it rendered on the **right**

This is a [link](https://github.com/alexandracaulea/markdown-previewer) to the repository.
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      textareaValue: placeholderText,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      textareaValue: e.target.value,
    });
  }

  render() {
    const { textareaValue } = this.state;
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <Editor
          textareaValue={textareaValue}
          handleChange={this.handleChange}
        />
        <Preview textareaValue={textareaValue} />
      </div>
    );
  }
}

export default App;
