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
    const apiUrl = `http://127.0.0.1:5555/user/${params.id}`; // Replace with the actual URL

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
                username={"You"}
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
