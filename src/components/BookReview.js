import React, { useState } from 'react';

function BookReview({ onSubmit }) {
  const [reviewText, setReviewText] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleSubmit = () => {
    if (reviewText) {
      setSubmittedReviews([...submittedReviews, reviewText]);
      onSubmit(reviewText);
      setReviewText('');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
}

export default BookReview;
