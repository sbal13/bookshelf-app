import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = props => {
  let booksList = () => {
    return props.books.map(book => (
      <li key={book.id}>
        <Book book={book} clickHandler={props.addToShelf} />
      </li>
    ));
  };
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search changeHandler={props.filterBooks} value={props.searchTerm} />
      <ul>{booksList()}</ul>
    </div>
  );
};

export default BookList;
