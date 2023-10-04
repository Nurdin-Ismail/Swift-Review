import React from 'react';
import Footer from './Footer';
import Home from './Home'
import NavBar from './NavBar'
import ContactUs from './ContactUs';
import BusinessListPage from './BusinessList';
import '../App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <section className='section'>
        <h1>Recent reviews card</h1>
      </section>

      
      <section className="section">
        <h1>Business Cards</h1>
        <BusinessListPage />
      </section>

      

      <section className='section'>
        <h1>Filtering bar</h1>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
