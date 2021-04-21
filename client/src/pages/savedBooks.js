import React, {useEffect, useState} from "react";

import API from '../utils/API';

function SavedBooks() {
  const [book, setBook] = useState ([])


  useEffect(() => {
    
API.getBooks().then((res)=> {
  console.log(res.data)
setBook(res.data)
}).catch((err) => console.log(err))
  },[])


  const handleDelete = (id) => {
    API.deleteBook (id).then((data) =>{
console.log(data);
setBook(book.filter((b) => b._id !== id))
    })
  }
  return (
    <div>
      {book.map((b) => (
        
        <div className="container jumbotron display">
        Results
        <h1> {b.title} </h1>
       <div>{b.synopsis} {b.date}</div>
       <div> {b.author}</div>
       {/* <li key={b.volumeInfo.imageLinks.smallThumnail}> 
       
       </li> */}
       
       <button onClick={() => handleDelete (b._id)}> Delete book </button>
      </div>
      ))}
     
    </div>
  );
}

export default SavedBooks;
