import React from "react";
import { Link} from 'react-router-dom';

function BusinessCard({business, name, category, sub_category, contact, location, poster,}){
    return(
        <div>
           <div className="business-card">
            <div className="kanu">
                <img src={poster} alt="" />
            </div>
            <div>
                <h2>Name: {name}</h2>
            <p>Category: {category}</p>
            <p>Subcategory: {sub_category}</p>
            
            <p>Contact: {contact}</p>
            <p>Location: {location}</p>
            <Link to={`/business/${business.business_id}`}>View Detail</Link>
            </div>
            
            
          </div> 

        </div>
    )
}

export default BusinessCard;