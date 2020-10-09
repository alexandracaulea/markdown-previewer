import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <h1 className="Header-heading">Markdown Previewer</h1>
      <p>
        Markdown is a lightweight markup language with plain-text-formatting
        syntax. Its main goal is to be very easy to read and write, even when
        not converted to HTML.
      </p>
      <p>
        Type some Markdown on the left and see the HTML rendered on the right.
      </p>
    </header>
  );
}
