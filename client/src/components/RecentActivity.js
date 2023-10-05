import React, { useEffect, useState } from "react";


function RecentActivity(){
    const [allRecentActivity, setAllRecentActivity] = useState([])


    useEffect(() => {
        fetch("http://127.0.0.1:5555/reviews/recent_reviews")
        .then (res => res.json())
        .then (data => setAllRecentActivity(data))
    }, [])

    return( 
        <>
            <div>
                <h2 className="text-center text-uppercase fw-bold">Recent Activity</h2>
            </div>
            <div className="recent-activity-container">
                {allRecentActivity.map((activity) => {

                return( 
                    <div className="recent-activity-card" key={activity.id}>
                        <div className="recent-user-name"><i class="fa-solid fa-user"></i>{activity.user.username}</div>
                        <div className="recent-bus-name">{activity.business.name}</div>
                        <div>{activity.businessposter}</div>
                        <div>Rated: {activity.rating}</div>
                        <p>{activity.comment}</p>
                    </div>

                        
            )})}
                
            </div>
        </>
        )
     
}

export default RecentActivity
    