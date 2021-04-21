import React,{useState} from "react";

import API from '../utils/API';
import Header from "../components/header";
// eslint-disable-next-line no-unused-vars
import Css from "./index.css"

function SearchBooks() {
  const [book, setBook] = useState ("")
const [searchedBook, setSearchedBook] = useState ([])


  const handleSubmit = () => {
    API.getAllBooks (book.split(" ").join("_")).then((data) =>{
console.log(data)
 setSearchedBook(data.data.items)
    }).catch ((err) => {
      console.log(err)
    })
  }

  const handleFormSubmit = (book) => {
    console.log(book)
    API.saveBook({
      title: book.volumeInfo.title,
      author: book.volumeInfo?.authors?.join(", ")|| "none listed",
      synopsis: book.searchInfo.textSnippet,
      date: Date.now
    }).then((res) => {console.log(res)})
    .catch(err => console.log(err));

  }
  return (

    <div> 

      <Header />


   
    <div className="container jumbotron display">
      <h3> 
        search book
      </h3>
      <div className="input-group mb-3">  
      <input 
      value={book}
      onChange={(e) => setBook(e.target.value)}
      >
      </input>
      <button type="button"className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>

      {searchedBook.map(b => (
      <div className="container jumbotron display">
        Results
       <h3> {b.volumeInfo.title}  </h3>
       <div>{b.volumeInfo.description} </div>
       <button onClick={() => handleFormSubmit (b)}> save book </button>
      </div>

      )) }
  
        </div>
     </div>
  );
}

export default SearchBooks;
