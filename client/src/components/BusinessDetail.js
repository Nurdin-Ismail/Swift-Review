import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
import ReviewDetail from './ReviewDetail';

function BusinessDetail({ businessId }) {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const params= useParams ()
  const [reviews, setreviews] = useState([])


  // Define the handleReviewClick function to handle the review action
  const handleReviewClick = (businessId) => {
    // Implement your logic for handling reviews here
    alert(`Review for business with ID ${businessId}`);
  };

  useEffect(() => {
    // Fetch data for the specific business using the businessId
    const apiUrl = `http://127.0.0.1:5555/business/${params.id}`; // Replace with the actual URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBusiness(data);
        setreviews(data.reviews)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!business) {
    return <div>Business not found.</div>;
  }

 console.log(business)

  return (
    <div>

    <section className='section'>

    </section>
      <h1>{business.name}</h1>
      <p>Category: {business.category}</p>
      <p>Subcategory: {business.sub_category}</p>
      <p>Contact: {business.contacts}</p>

      <div>

         {/* Display Business Description */}
      <div>
        <h2>Description</h2>
        <p>{business.description}</p>
      </div>

      <div>
        <h2>Images</h2>

        <img src="./images/download.jpeg" alt="Business Image" />
        <img src="./images/mamanilishe.jpeg" alt="Business Image" />
      </div>

        <h2>Business Hours</h2>
        <ul>
          <li>Monday: 9:00 AM - 6:00 PM</li>
          <li>Tuesday: 9:00 AM - 6:00 PM</li>
          <li>Wednesday: 9:00 AM - 6:00 PM</li>
          <li>Thursday: 9:00 AM - 6:00 PM</li>
          <li>Friday: 9:00 AM - 6:00 PM</li>
        </ul>
      </div>

      {/* Display Ratings and Reviews */}
      <div>
        <h2>Ratings and Reviews</h2>
        <div>
          <h3>Overall Rating: 4.5/5</h3>
          <p>Reviews:</p>
          {reviews.map((review) => {
                    return(
                      <ReviewDetail
                      username={review.user.username}
                      rating = {review.rating}
                      comment={review.comment}
                      created_at={review.created_at}
                      


                      />


                     )})}
        </div>
      </div>

      {/* Display Business Description */}
      <div>
        <h2>Description</h2>
        <p>{business.description}</p>
      </div>

      <div>
        <h2>Images</h2>

        <img src="./images/download.jpeg" alt="Business Image" />
        <img src="./images/mamanilishe.jpeg" alt="Business Image" />
      </div>

    
      {/* Add a "Review" button */}
      <div>
        <button onClick={() => handleReviewClick(business.id)}>Review</button>
      </div>
    </div>
  );
}

export default BusinessDetail;
