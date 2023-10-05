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
    <div className='review_form'>
      <h2 className='text-center text-uppercase'>Add a Review</h2>
      <form onSubmit={handleSubmit} className='w-50'>
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            id="floatingInput"
            placeholder="Write your review comment here..."
            value={comment}
            onChange={handleCommentChange}
            required
          ></textarea>
          <label for="floatingInput">Comment</label>
        </div>
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
        <button className="btn btn-primary sgn_btn" type="submit">Submit</button>
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