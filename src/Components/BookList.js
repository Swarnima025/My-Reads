import React from 'react'
import AddButton from './AddButton';
import BookShelf from './BookShelf';
const BookList = (props) => {
  const sections = [
    {type:"currentlyReading",title:"Currently Reading"},
    {type:"wantToRead",title:"Want to Read"},
    {type:"read",title: "Read"}
  ];
  return(
    
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div className="bookshelf">

          {sections.map((section)=>(
            <>
             <h2 className="bookshelf-title">{section.title}</h2>
             <BookShelf books={props.books} changeShelf ={props.changeShelf} currentShelf ={section.type}/>
            </>
          ))}
       
        </div>
        </div>
      <AddButton/>
      </div>
);
  }
  export default BookList;