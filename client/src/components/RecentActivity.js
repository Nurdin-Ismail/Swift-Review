import React, { useEffect, useState } from "react";
import axios from 'axios';

function RecentActivity() { // Changed the function name to RecentActivity
    const [allRecentActivity, setAllRecentActivity] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://127.0.0.1:5555/reviews/recent_reviews')
        .then((response) => {
          setAllRecentActivity(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <>
        <div>
          <h2 className="text-center text-uppercase fw-bold">Recent Activity</h2>
        </div>
        <div className="recent-activity-container">
          {allRecentActivity.map((activity) => (
            <div className="recent-activity-card" key={activity.id}>
              <div className="recent-user-name">
                <i className="fa-solid fa-user"></i>
                {activity.user.username}
              </div>
              <div className="recent-bus-name">{activity.business.name}</div>
              <div>{activity.businessposter}</div>
              <div>Rated: {activity.rating}</div>
              <p>{activity.comment}</p>
            </div>
          ))}
        </div>
      </>
    );
}

export default RecentActivity; // Export the component with the correct name
