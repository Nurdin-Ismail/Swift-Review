import React, { useEffect, useState,  } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 


function ReviewDetail({username, rating, comment, created_at, id}) {
  

  const navigate = useNavigate();

  return (
    <div className="review-container">
      
      <div className="review-card">

        <p className="user-name" onClick={() => {
          navigate(`/user/${id}`)
          console.log(id)

        }}><i class="fa-solid fa-user" ></i> {username}</p>
        <p className="rating">Rating: {rating}</p>
        <p className="comment">Comment: {comment}</p>
        
        <p className="created-at">Created At: {created_at}</p>
        
        
      </div>
    </div>
  );
}

export default ReviewDetail;
