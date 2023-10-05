import React, { useState } from "react";

function RestaurantForm() {

  const [restaurantData, setRestaurantData] = useState({
    name: "",
    category: "",
    sub_category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({
      ...restaurantData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(restaurantData);
  };

  return (
    <div>
      <h2>Add a Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={restaurantData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={restaurantData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subcategory:</label>
          <input
            type="text"
            name="sub_category"
            value={restaurantData.sub_category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantForm;