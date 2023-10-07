import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import ReviewDetail from './ReviewDetail';
import axios from "axios";
import ReviewForm from './ReviewForm';
import Footer from './Footer';

function BusinessDetail({userId, refresh, setrefresh}) {
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);
  const params = useParams();
  const [reviews, setreviews] = useState([])


    // Define the handleReviewClick function to handle the review action
    const handleReviewClick = (businessId) => {
      // Implement your logic for handling reviews here
      alert(`Review for business with ID ${businessId}`);
    };

    useEffect(() => {
      // Fetch data for the specific business using the businessId
      const apiUrl = `http://127.0.0.1:5555/business/${params.id}`; // Replace with the actual URL

      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          setBusiness(data);
          setreviews(data.reviews)
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, [params, refresh]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!business) {
      return <div>Business not found.</div>;
    }

    console.log(business);

    return (
              <div>
                <div className='bsns_dtls'>
                  <h1  className="text-center text-uppercase fw-bolder text-decoration-underline">{business.name}</h1>
                  <div className='bsns_dtls2'>
                      <p>Category: {business.category}</p>
                      <p>Subcategory: {business.sub_category}</p>
                      <p>Contact: {business.contacts}</p>
                      <div>
                        <h2 className='text-uppercase'>Description</h2>
                        <p>{business.description}</p>
                      </div>
                      <div>
                        <h2 className='text-uppercase'>Images</h2>
                        <img src="./images/download.jpeg" alt="Business Image" />
                        <img src="./images/mamanilishe.jpeg" alt="Business Image" />
                      </div>
                      <div>
                        <h2 className='text-uppercase'>Business Hours</h2>
                        <ul>
                          <li>Monday: 9:00 AM - 6:00 PM</li>
                          <li>Tuesday: 9:00 AM - 6:00 PM</li>
                          <li>Wednesday: 9:00 AM - 6:00 PM</li>
                          <li>Thursday: 9:00 AM - 6:00 PM</li>
                          <li>Friday: 9:00 AM - 6:00 PM</li>
                        </ul>
                          <h2 className='text-uppercase'>Ratings and Reviews</h2>
                          <div>
                            <h3 className='text-uppercase'>Overall Rating: 4.5/5</h3>
                            <p>Reviews:</p>
                          </div>
                      </div>
                  </div>
                </div>
                {/* Display Ratings and Reviews */}
                  <div>
                    <ReviewForm businessId={business.id} userId={userId} setrefresh={setrefresh}/>
                  </div>
                  <div>
                    {reviews.map((review) => (
                        <ReviewDetail 
                        username={review.user.username}
                        rating= {review.rating}
                        comment={review.comment}
                        created_at={review.created_at}
                        
                        />
                      ))}
                  </div>
                  <Footer />
              </div>
    );
}

export default BusinessDetail;
