import React from "react";
import { Link, NavLink, useNavigate} from 'react-router-dom';

function BusinessCard({business, name, category, sub_category, contact, location, poster, }){

    const navigate = useNavigate();

    return(
        <div>

            
            
            

           <div className="business-card" onClick={() => {
            navigate(`/business/${business.id}`)
           }
            }>
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