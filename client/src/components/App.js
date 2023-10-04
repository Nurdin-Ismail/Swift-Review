import React from 'react';
import Footer from './Footer';
import Home from './Home'
import NavBar from './NavBar'
import ContactUs from './ContactUs';
import Login from './Login'
import SignUp from './SignUp'
import FilterSideBar from './FilterSideBar';

import '../App.css'



function App() {
  return (

         
      
          
        




    <div>

      
      <NavBar />
      <Home />
      
      
      <section className='section'>

        <h1 className='title'>Category route/business card</h1>
        



      </section>

      <section className='section'>
        <h1 className='title'>filtering bar

        </h1>

        <NavBar/>
        <FilterSideBar/>

      </section>
      <section className='section'>
        <h1 className='title'>login

        </h1>

        <Login/>

      </section>
      <section className='section'>
        <h1 className='title'>SignUp

        </h1>

        <SignUp/>

      </section>
      <ContactUs/>
      <Footer />
    </div>

  );
}

export default App;



