import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import BusinessDetail from "./BusinessDetail";
import ReviewDetail from "./ReviewDetail";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);
  const [reviews, setreviews] = useState([]);

  // Define the handleReviewClick function to handle the review action
  // function handleReviewClick(userId){
  //   // Implement your logic for handling reviews here
  //   alert(`Review for business with ID ${userId}`);
  // };

  useEffect(() => {
    // Fetch data for the specific business using the businessId
    const apiUrl = `https://swift-review-api-5vgv.onrender.com/user/${params.id}`; // Replace with the actual URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setreviews(data.reviews);
        console.log(reviews);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }
  console.log(reviews)
  console.log(userId)
  let usernamu

  if (userId){
    if(userId == params.id){
      usernamu =  "You"  
    }else{
      usernamu = user.username

    }
  }else{
      usernamu = user.username
    }

  

  return (
    <div className="user-profile-main">
      <section className="usersection">
        <div className="user-profile-container">
          <h1>{user.username}</h1>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone Number:</b> {user.contacts}
          </p>
          <p>
            <b>Membership Date:</b> {user.created_at}
          </p>
        </div>
        {/* Display Ratings and Reviews */}
        <div className="reviews-dtls">
          {reviews.map((review) => {
            return (
              <ReviewDetail
                username={usernamu}
                rating={review.rating}
                comment={review.comment}
                created_at={review.created_at}
              />
            );
          })}
        </div>
        {/* Display Business Description */}
      </section>
    </div>
  );
}

export default UserProfile;
