import React, { useState } from 'react';
import axios from 'axios';

function ReviewCommentForm({ businessId, userId }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      try {
        const newComment = {
          text: comment,
          rating: rating,
          businessId: businessId,
          user_id: userId, 
        };

        const response = await axios.post('http://127.0.0.1:5555/reviews', newComment);

        setComments([...comments, response.data]);
        setComment('');
        setRating(1);
      } catch (error) {
        console.error('Error', error);
      }
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
          <label htmlFor="floatingInput">Comment</label>
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
