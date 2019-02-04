import React from "react";

const Book = props => {
  let { book, clickHandler } = props;
  return (
    <div>
      <h2>{book.title}</h2>
      <img alt="" src={book.img} onClick={() => clickHandler(book)} />
    </div>
  );
};

export default Book;
