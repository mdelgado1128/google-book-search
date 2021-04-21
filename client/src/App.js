import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import saveBook from "./pages/savedBooks";
import searchBook from "./pages/searchBooks";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Route exact path="/savedBooks" component={saveBook}/>
        <Route exact path="/" component={searchBook} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;