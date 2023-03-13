import React, { useState,useEffect } from 'react'
import * as BooksAPI from "../utils/BooksAPI";
import { useParams } from 'react-router-dom';
import Results from './Results';
import SearchBar from './SearchBar';
const  BookSearch= (props)=> {
 const {id} = useParams()

  const [query, setQuery] = useState('');
  const [matchedBooks, setMatchedBooks] = useState([]);

  const updateQuery = (query) => {
    let trimmedQuery = query.replace(/^\s+/, '');
    setQuery(trimmedQuery);
    fetchMatchedBooks(trimmedQuery);
  };

  const fetchMatchedBooks = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((matchedBooks) => {
        if (matchedBooks.error) {
          setMatchedBooks([]);
        } else {
          setMatchedBooks(matchedBooks);
        }
      });
    } else {
      setMatchedBooks([]);
    }
  };

  useEffect(() => {
    return () => {
      setQuery('');
      setMatchedBooks([]);
    };
  }, []);

  return (
    <div className="search-books">
      <SearchBar query={query} updateQuery={updateQuery}/>
      <Results matchedBooks={matchedBooks} changeShelf={props.changeShelf} books={props.books} currentShelf={props.currentShelf} path={id}/>
    </div>
  );
};



export default BookSearch;