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
    <div className="review_form">
      <h2 className="mt-5 mb-4 text-center text-uppercase">Add a business</h2>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="floatingInput"
            placeholder="name"
            value={restaurantData.name}
            onChange={handleChange}
            required 
          />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="category"
            placeholder="category"
            className="form-control"
            id="floatingInput"
            value={restaurantData.category}
            onChange={handleChange}
            required
          />
          <label for="floatingInput">Category</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="sub_category"
            placeholder="subcategory"
            className="form-control"
            id="floatingInput"
            value={restaurantData.sub_category}
            onChange={handleChange}
            required
          />
          <label for="floatingInput">Subcategory</label>
        </div>
        <button type="submit" className="btn btn-primary sgn_btn">Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantForm;