import React from 'react';
import { Route, Routes, } from "react-router-dom";
import Footer from './Footer';
import Home from './Home'
import NavBar from './NavBar'
import ContactUs from './ContactUs';
import Login from './Login'
import SignUp from './SignUp'
import FilterSideBar from './FilterSideBar';
import Businesslist from './Businesslist';
import RestaurantArea from './RestaurantPage';
import AutomotiveArea from './AutomotivePage';

import BusinessDetail from './BusinessDetail';


import RestaurantForm from './RestaurantForm';
import ReviewForm from './ReviewForm';

import '../App.css'
import RecentActivity from './RecentActivity';



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      
        <Route exact path='/' element= {<Home />} />
        
        <Route exact path='/restaurants' element= {<RestaurantArea/>} />
        <Route exact path='/automotives' element= {<AutomotiveArea/>} />


        <Route path='/login' element= {<Login/>} />
        <Route path='/signup' element= {<SignUp/>} />
        <Route path='/contactus' element= {<ContactUs/>} />

        <Route path='/restaurantform' element= {<RestaurantForm/>} />
        <Route path='/reviewform' element= {<ReviewForm/>} />

        <Route path='/business/2' element={<BusinessDetail />} />
        <Route path='/filter' element={<FilterSideBar />} />



      </Routes>
      {/* <Footer /> */}
      {/*<RestaurantForm/>
      <ReviewForm/>*/}
    </div>

  );
}

export default App;



