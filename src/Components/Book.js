import React from 'react';
import Dropdown from './Dropdown';
const Book = ({ book, changeShelf, currentShelf,  path}) => {

  const hasThumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url("${hasThumbnail}")` }}
        ></div>
        
        <Dropdown toggle={book.hasOwnProperty('shelf') ? true:false} changeShelf={changeShelf} currentShelf={currentShelf} book={book} path={path}/>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};


export default Book;
