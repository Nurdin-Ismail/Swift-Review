import React, { useEffect, useState } from "react";


function RecentActivity(){
    const [allRecentActivity, setAllRecentActivity] = useState([])


    useEffect(() => {
        fetch("http://127.0.0.1:5555/reviews")
        .then (res => res.json())
        .then (data => setAllRecentActivity(data))
    }, [])

    let newo = allRecentActivity.filter(() => {})

    // if(!image) {
    //     return <h2>Loading...</h2>
    // }

    return(
        <div className="recent-activity-container">
            {allRecentActivity.map((activity) => {
                return( 
                    <div className="recent-activity-card" key={activity.id}>
                        <div>{activity.user_id}</div>
                        <div>{activity.img}</div>
                        <div>{activity.business_id}</div>
                        <div>{activity.rating}</div>
                        <p>{activity.comment}</p>
                        <a href="#">Read More</a>
                    </div>
                    
    )})}
            
        </div>
    )
}

export default RecentActivity
    


