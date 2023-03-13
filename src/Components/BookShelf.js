import React from 'react'
import Book from './Book';
const BookShelf = ({ books, changeShelf, currentShelf }) => {
  // console.log(changeShelf);

  return (
    <div>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {
            books.filter((book) => book.shelf === currentShelf)
              .map(book => (
                <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={changeShelf}
                  currentShelf={currentShelf}
                />
                </li>

              ))
          }
        </ol>
      </div>
    </div>
  )
}


export default BookShelf;