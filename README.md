# Markdown Previewer

"Build a Markdown Previewer" [project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) is part of the Front End Libraries Projects from freeCodeCamp.

## Objective

1. Build a CodePen app that is functionally similar to [this](https://codepen.io/freeCodeCamp/full/GrZVVO).
2. To complete this project I've decided to use React.

## User Stories

1. There should be a textarea element with a corresponding id="editor".
2. There should be an element with a corresponding id="preview".
3. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
4. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
5. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

## Testing

In order to test the requirements I've use [this](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) CDN link provided by freeCodeCamp.

## How To Use It

### Installation

1. Clone the repository: `https://github.com/alexandracaulea/markdown-previewer`.
2. Go to the project: `cd markdown-previewer`.
3. Install project dependencies by running: `yarn install`.

### Using this repository

1. For the development run: `yarn start`.
2. To build run `yarn build`.
3. To run tests: `yarn test`.
4. To build: `yarn build`.
5. To eject `yarn eject`
