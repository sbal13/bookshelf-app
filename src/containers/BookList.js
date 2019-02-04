import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = () => {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <ul>{/* Render Books */}</ul>
    </div>
  );
};

export default BookList;
