import React, { useState } from 'react';

function ReviewCommentForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1); 
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value)); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {

      const newComment = {
        text: comment,
        rating: rating,
      };

      setComments([...comments, newComment]);
      setComment('');
      setRating(1); 
    }
  };

  return (
    <div>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review comment here..."
          value={comment}
          onChange={handleCommentChange}
          required
        ></textarea>
        <div>
          <label>Rating:</label>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={handleRatingChange}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>Rating: {comment.rating}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewCommentForm;