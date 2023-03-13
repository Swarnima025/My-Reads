import React from 'react'
import Book from './Book'
const Results=({matchedBooks,books,changeShelf,currentShelf,path})=> {
  console.log(matchedBooks,books,"p[opo")
  return (
    <div className="search-books-results">
        <ol className="books-grid">
          {matchedBooks.map((matchedBook) => {
            books.forEach((book) => {
              if (book.id === matchedBook.id) {
                matchedBook.shelf = book.shelf;
                
              }
            });
            return (
              <li key={matchedBook.id}>
                <Book
                  book={matchedBook}
                  changeShelf={changeShelf}
                  currentShelf={currentShelf}
                  books={matchedBooks}
                  path={path}
                />
              </li>
            );
          })}
        </ol>
      </div>
  )
}

export default Results;