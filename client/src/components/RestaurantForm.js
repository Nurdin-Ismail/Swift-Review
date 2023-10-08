import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate} from 'react-router-dom';


function RestaurantForm({isLoggedIn, userId}) {

  const navigate = useNavigate();

  const [restaurantData, setRestaurantData] = useState({
    name: "",
    category: "",
    sub_category: "",
  });

  const [category, setcategory] = useState()
  const [subcategory, setsubcategory] = useState()
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [name, setname] = useState('')
  const [poster, setposter] = useState('https://dummyimage.com/200x200')
  const [contacts, setcontacts] = useState()
  const [location, setlocation] = useState('')

  const getCategoriesAndSubCategories = async () => {
    try {
      
      const data = {
        categories: ["Restaurants", "Automotives"],
        subCategories: {
          Restaurants: ["Local", "Italian", "Indian", "Chinese"],
          Automotives: ["Auto-repair", "Car Wash", "Car Dealers", "Parking"],
        },
      };

     
      const categories = data.categories;
      const subCategories = data.subCategories;

      
      setCategories(categories);
      setSubCategories(subCategories);
    } catch (error) {
      console.error("Error fetching categories and subcategories:", error);
    }
  };

  
  useEffect(() => {
    getCategoriesAndSubCategories(); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({
      ...restaurantData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setRestaurantData({
      ...restaurantData,
      category: selectedCategory,
      sub_category: "", 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoggedIn == true){
      try {

         let business_form ={
             name: name,
             category: category,
             sub_category: subcategory,
             owner_id : userId,
             contacts : contacts,
             poster: poster,
             location: location,
        }
        const response = await axios.post('http://127.0.0.1:5555/businesses', business_form );

        if (response) {
           console.log(response)
           console.log("Business added successfully!");
           setname('')
           setlocation('')
           setcontacts('')
           navigate('/')
        }
      } catch (error) {
           console.error("Error adding business:", error);
      }
   }else{
      alert("Not logged in")
   }
  }

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
            value={name}
            onChange={(e) => setname(e.target.value)}
            required

          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="Location"
            className="form-control"
            id="floatingInput"
            placeholder="Location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            required

          />
          <label htmlFor="floatingInput">Location</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="Contacts"
            className="form-control"
            id="floatingInput"
            placeholder="Contacts"
            value={contacts}
            onChange={(e) => setcontacts(e.target.value)}
            required

          />
          <label htmlFor="floatingInput">Contacts</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="Poster"
            className="form-control"
            id="floatingInput"
            placeholder="Poster"
            value={poster}
            onChange={(e) => setposter(e.target.value)}
            required

          />
          <label htmlFor="floatingInput">Poster</label>
        </div>
        <div className="form-floating mb-3">
          <select
            id="categoryDropdown"
            name="category"
            className="form-select"
            value={restaurantData.category}
            onChange={handleCategoryChange}
            required
            onClick={(e) => setcategory(e.target.value)}
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category} onClick={(e) => console.log(e.target.value)}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-floating mb-3">
          <select
            id="subcategoryDropdown"
            name="sub_category"
            className="form-select"
            value={restaurantData.sub_category}
            onChange={handleChange}
            required
            onClick={(e) => setsubcategory(e.target.value)}
          >
            <option value="" disabled>Select a subcategory</option>
            {subCategories[restaurantData.category]?.map((subCategory, index) => (
              <option key={index} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary sgn_btn">
          Add Business
        </button>
      </form>
    </div>
  );
}

export default RestaurantForm;


