import React, { useState } from 'react';
import BookReview from './BookReview';

function BookDisplay({ books, onWriteReview, openReviews, searchCriteria }) {

  const [bookReviews, setBookReviews] = useState({});
  if (!books) {
    return '';
  }

  const handleReviewSubmit = (bookId, reviewText) => {
    if (reviewText) {
      setBookReviews((prevBookReviews) => ({
        ...prevBookReviews,
        [bookId]: [...(prevBookReviews[bookId] || []), reviewText],
      }));
    }
  };

  // Filter the books based on search criteria
  const filteredBooks = books.filter((book) => {
    if (searchCriteria.type === 'bookName') {
      return book.name.toLowerCase().includes(searchCriteria.term.toLowerCase());
    } else if (searchCriteria.type === 'publisherName') {
      return book.publisher.toLowerCase().includes(searchCriteria.term.toLowerCase());
    } else if (searchCriteria.type === 'isbn') {
      return book.isbn === searchCriteria.term;
    }
    return true;
  });

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.url}>
            <h3>{book.name}</h3>
            <p>ISBN: {book.isbn}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Authors: {book.authors}</p>
            <p>Country: {book.country}</p>
            <button onClick={() => onWriteReview(book.url)}>Write a Review</button>
            {openReviews[book.url] && (
              <>
                <>&nbsp;&nbsp;</><button onClick={() => onWriteReview(book.url)}>X</button>
                <BookReview bookId={book.url} onSubmit={(reviewText) => handleReviewSubmit(book.url, reviewText)} />
                <div>
                  <h4>Reviews:</h4>
                  {bookReviews[book.url] &&
                    bookReviews[book.url].map((review, index) => (
                      <p key={index}>{`${index + 1}. ${review}`}</p> // Add a review number
                    ))}
                </div>
              </>
            )}
            {/* Display previously submitted reviews even if the review section is closed */}
            {!openReviews[book.url] && bookReviews[book.url] && (
              <div>
                <h4>Reviews:</h4>
                {bookReviews[book.url].map((review, index) => (
                  <p key={index}>{`${index + 1}. ${review}`}</p> // Add a review number
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDisplay;
