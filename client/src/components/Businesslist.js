import React, { useEffect, useState } from 'react';
import '../App.css'


function BusinessList() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const apiUrl = 'http://127.0.0.1:5555/businesses';

    // Fetch data from the API using Axios 
    
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
     setBusinesses(data);
     setLoading(false);
  }
  
  )
  .catch(error => {

    console.error(error)
  setLoading(false)
  }
    
    
  );
      
      
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List of Businesses</h1>
      <div className="business-cards">
        {businesses.map((business) => (
          <div className="business-card" key={business.id}>
            <h2>{business.name}</h2>
            <p>Category: {business.category}</p>
            <p>Subcategory: {business.sub_category}</p>
            <p>Name:{business.name}</p>
            <p>Contact:{business.contract}</p>
            <p>Location:{business.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessList