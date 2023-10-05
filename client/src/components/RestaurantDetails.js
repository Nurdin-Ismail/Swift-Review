import React from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetail() {
  // Access the restaurantId parameter from the URL
  const { restaurantId } = useParams();

  // Mock data for restaurant details (replace with your actual data fetching)
  const restaurantDetails = {
    id: restaurantId,
    name: 'Sample Restaurant',
    description: 'A cozy place with delicious food.',
    address: '123 Main Street, City',
    phone: '+1 123-456-7890',
    
  };

  return (
    <div>
      <h2>Restaurant Details</h2>
      <p>Restaurant ID: {restaurantDetails.id}</p>
      <h3>{restaurantDetails.name}</h3>
      <p>Description: {restaurantDetails.description}</p>
      <p>Address: {restaurantDetails.address}</p>
      <p>Phone: {restaurantDetails.phone}</p>
      
    </div>
  );
}

export default RestaurantDetail;



