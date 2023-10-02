// src/App.js
import React from 'react';
import './App.css'; 
import BookSearchApp from './components/BookSearchApp';
// import BookReview from './components/BookReview';
import Header from './components/Header'; 
import BookDisplay from './components/BookDisplay';

function App() {
  return (
    <div className="App">
      <Header /> 
      <BookSearchApp />
      <BookDisplay />
    </div>
  );
}

export default App;
