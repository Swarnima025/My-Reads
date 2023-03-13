import React from 'react'
import {Link} from 'react-router-dom';
function SearchBar({query,updateQuery}) {
  return (
    <div>
       <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar