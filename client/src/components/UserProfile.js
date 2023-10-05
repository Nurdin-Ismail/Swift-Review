
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
    
const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user profile data from the API
    fetch('http://127.0.0.1:5555/user/id')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Contacts: {userData.contacts}</p>
      
    </div>
  );
};


export default UserProfile;

