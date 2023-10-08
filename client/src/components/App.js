import React, {useState} from 'react';
import { Route, Routes,} from "react-router-dom";
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
import ReviewDetail from './ReviewDetail';

import RestaurantForm from './RestaurantForm';


import '../App.css'
import RecentActivity from './RecentActivity';
import UserProfile from './UserProfile';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [userId, setuserid] = useState()
  const [dropdowncateg, setdropdowncateg] = useState('')
  

  
  function handleNavbarSubCategs(sub_categ){

    setdropdowncateg(sub_categ, () => {
      console.log(sub_categ)
    })
    
      console.log(dropdowncateg)
    
    



  }
console.log(userId)

  


  
  return (
    <div>
      <NavBar  handlesub = {handleNavbarSubCategs} dropdowncateg={dropdowncateg} isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
      <Routes>
      
        <Route exact path='/' element= {<Home/>} />
        
        <Route exact path='/restaurants' element= {<RestaurantArea dropcateg= {dropdowncateg}/>} />
        <Route exact path='/automotives' element= {<AutomotiveArea dropcateg= {dropdowncateg}/>} />


        <Route path='/login' element= {<Login setIsLoggedIn ={setIsLoggedIn} setuserid={setuserid}/>} />
        <Route path='/signup' element= {<SignUp setIsLoggedIn ={setIsLoggedIn} setuserid={setuserid}/>} />
        <Route path='/contactus' element= {<ContactUs/>} />

        <Route path='/add-business' element= {<RestaurantForm userId={userId}/>} />
        

        <Route path='/filter' element={<FilterSideBar />} />
        <Route path="/business/:id" element={<BusinessDetail  userId={userId} isLoggedIn={isLoggedIn}/>} />
       



        <Route path='/user/:id' element={<UserProfile userId={userId} />} />


      </Routes>
      
      {/*<RestaurantForm/>
      <ReviewForm/>*/}
    </div>

  );
}

export default App;



