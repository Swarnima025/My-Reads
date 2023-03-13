import React from 'react'
import {useNavigate} from 'react-router-dom';
function Dropdown(props) {
  let navigate = useNavigate();
  return (
    
         <div className="book-shelf-changer">
                      <select
                        onChange ={
                          (e)=>{
                            props.changeShelf(props.book,e.target.value)
                            navigate("/");
                          }

                          }
                            value={props.book.shelf}
                          >
                        
                        <option  disabled>
                          {props.path === 'search' ? props.toggle ? 'Add To ...' : 'Move to ..': 'Move To...'}
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
          
                        <option value="none"
                        style={{display:props.path === 'search' && props.toggle ? 'none' : '' }}>
                        None
                        
                        </option>
                        
                        
                      </select>
                      </div>
    
  )
}


export default Dropdown