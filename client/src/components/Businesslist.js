import React, { useEffect, useState } from 'react';
import '../App.css'
import BusinessCard from './BusinessCard';
import { Link, NavLink } from 'react-router-dom';


function BusinessList({categ, businesses, loading, categoryofroute}) {
  

  // const filtered = businesses.filter((x) => x.sub_category == categ )
  // console.log(filtered)

  // useEffect(() => {
  //   setBusinesses(filtered)

  // }, [categ])

 
  

  return (
    <div className='bsns_sctn d-flex justify-content-center'>
        <div className='bsns_crtl'>
          <h1 className='text-center text-uppercase fw-bold text-decoration-underline'>List of {categoryofroute}</h1>
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
    </div>
  );
}

export default BusinessList