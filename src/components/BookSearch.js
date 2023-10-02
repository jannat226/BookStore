// src/components/BookSearch.js
import React, { useState } from 'react';
import './BookSearch.css'; // Import the CSS file

function BookSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('bookName');

  const handleSearch = () => {
    onSearch(searchTerm, searchType);
  };

  return (
    <div className="book-search-container">
      <input
        type="text"
        className="book-search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="book-search-select"
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="bookName">Book Name</option>
        <option value="publisherName">Publisher Name</option>
        <option value="isbn">ISBN</option>
      </select>
      <button className="book-search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}


export default BookSearch;
