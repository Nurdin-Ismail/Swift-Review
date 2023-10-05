import React from "react";
import { useNavigate } from "react-router-dom"; 

function RestaurantCard(){

    const navigate = useNavigate()

    return(
        <div className="hme_crd" onClick={() =>navigate('/restaurants')}>
            <div>
                <i class="fa-solid fa-utensils"></i>
            </div>
            <h4>Restaurants</h4>
        </div>
    )
}

export default RestaurantCard;