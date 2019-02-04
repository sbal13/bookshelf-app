import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    filteredBooks: [],
    bookshelf: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/books")
      .then(resp => resp.json())
      .then(books => this.setState({ books: books, filteredBooks: books }));
  }

  addToShelf = book => {
    let bookshelf = this.state.bookshelf.includes(book)
      ? this.state.bookshelf
      : [...this.state.bookshelf, book];
    this.setState({
      bookshelf: bookshelf
    });
  };
  removeFromShelf = bookObj => {
    let bookshelf = this.state.bookshelf.filter(book => book.id !== bookObj.id);
    this.setState({
      bookshelf: bookshelf
    });
  };
  filterBooks = e => {
    console.log("change");
    let filteredBooks = this.state.books.filter(book =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filteredBooks: filteredBooks,
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.filteredBooks}
          addToShelf={this.addToShelf}
          searchTerm={this.state.searchTerm}
          filterBooks={this.filterBooks}
        />
        <Bookshelf
          books={this.state.bookshelf}
          removeFromShelf={this.removeFromShelf}
        />
      </div>
    );
  }
}

export default App;
