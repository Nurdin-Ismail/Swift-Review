import React, { useEffect, useState } from "react";

import { Link, NavLink, useNavigate} from 'react-router-dom';


function RecentActivity(){
    const [allRecentActivity, setAllRecentActivity] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://swift-review-api-5vgv.onrender.com/reviews/recent_reviews")
        .then (res => res.json())
        .then (data => setAllRecentActivity(data))
    }, [])

    return( 
        <div>
            <div>
                <h2 className="text-center text-uppercase fw-bold">Recent Activity</h2>
            </div>
            <div className="recent-activity-container">
                {allRecentActivity.map((activity) => {

                return( 
                    <div className="recent-activity-card" key={activity.id}>
                        <div className="recent-user-name" onClick={() => {
            navigate(`/user/${activity.user.id}`)
           }
            }><i class="fa-solid fa-user" ></i>{activity.user.username}</div>
                        <div  onClick={() => {
            navigate(`/business/${activity.business.id}`)
           }
            }>
                <p className="recent-bus-name">  
                    {activity.business.name}
                </p>
                
                </div>
                        <div>{activity.businessposter}</div>
                        <div>Rated: {activity.rating}</div>
                        <p>{activity.comment}</p>
                    </div>

                        
            )})}
                

            </div>
          
        
        </div>
    );
}

export default RecentActivity; // Export the component with the correct name
