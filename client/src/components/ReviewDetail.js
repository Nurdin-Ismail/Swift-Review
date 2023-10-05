import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 


function ReviewDetail({username, rating, comment, created_at}) {
  

  

  return (
    <div className="review-container">
      
      <div className="review-card">

        <p className="user-name">{username}</p>
        <p className="rating">Rating: {rating}</p>
        <p className="comment">Comment: {comment}</p>
        
        <p className="created-at">Created At: {created_at}</p>
        
        
      </div>
    </div>
  );
}

export default ReviewDetail;
