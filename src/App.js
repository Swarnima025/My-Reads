import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookSearch from './Components/BookSearch';
import BookList from './Components/BookList';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const bookShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  };
  return (
    <div className="app">
      <Routes>
      <Route exact path="/"
       element= { <BookList books={books} changeShelf={bookShelf} />}/>
      <Route exact path="/:id"
       element={ <BookSearch books={books} changeShelf={bookShelf} />}/>
      </Routes>
    </div>
  );
};

export default App;
