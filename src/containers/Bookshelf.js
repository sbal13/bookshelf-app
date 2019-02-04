import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let books = props.books.map(book => (
    <li key={book.id}>
      <Book book={book} clickHandler={props.removeFromShelf} />
    </li>
  ));
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
