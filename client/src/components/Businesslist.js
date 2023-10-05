import React, { useEffect, useState } from 'react';
import '../App.css'
import BusinessCard from './BusinessCard';


function BusinessList({categ, businesses, loading}) {
  

  // const filtered = businesses.filter((x) => x.sub_category == categ )
  // console.log(filtered)

  // useEffect(() => {
  //   setBusinesses(filtered)

  // }, [categ])
  

  return (
    <div>
      <h1>List of Restaurants</h1>
      <div className="business-cards">
        {businesses.map((business) => (
          <BusinessCard
          business={business}
          key = {business.id}
          name={business.name}
          category={business.category}
          sub_category={business.sub_category}
          contact={business.contacts}
          location={business.location}
          poster={business.poster}
          
          />
        ))}
      </div>
    </div>
  );
}

export default BusinessList