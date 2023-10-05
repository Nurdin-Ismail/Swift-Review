import React, { useEffect, useState } from "react";


function RecentActivity(){
    const [allRecentActivity, setAllRecentActivity] = useState([])


    useEffect(() => {
        fetch("http://127.0.0.1:5555/reviews/recent_reviews")
        .then (res => res.json())
        .then (data => setAllRecentActivity(data))
    }, [])

    // let newo = allRecentActivity.filter(() => {})

    // if(!image) {
    //     return <h2>Loading...</h2>
    // }

    return( 
        <>
            <div className="recent-heading"><h2>Recent Activity</h2></div>
            <div className="recent-activity-container">
                {allRecentActivity.map((activity) => {
                    return( 
                        <div className="recent-activity-card" key={activity.id}>
                            <div className="recent-user-name">{activity.user.username}</div>
                            <div className="recent-bus-name">{activity.business.name}</div>
                            <div>{activity.businessposter}</div>
                            <div>{activity.rating}</div>
                            <p>{activity.comment}</p>
                            <a href="#">Read More</a>
                        </div>
                        
            )})}
                
                </div>
                </>
        )
     
}

export default RecentActivity
    