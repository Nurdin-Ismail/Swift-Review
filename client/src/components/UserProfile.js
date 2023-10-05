import React, { useEffect, useState } from 'react';
import '../App.css'
import { useParams } from 'react-router-dom';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams()
  console.log(params)
  
  

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

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Category: {user.email}</p>
      <p>Contact: {user.contacts}</p>

      {/* Display Ratings and Reviews */}

      {/* Display Business Description */}
  
    </div>
  );
}

export default UserProfile;
