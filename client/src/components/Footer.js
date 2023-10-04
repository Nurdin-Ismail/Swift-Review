import React from 'react'
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <div>
        <footer classname="footer"/>
            <div classname="container">
                <h3>Explore</h3>
                <ul>
              <li><NavLink to="/review">review</NavLink></li>
              <li><NavLink to="/businesses">Business</NavLink></li>
              <li><NavLink to="/contactus">contact us</NavLink></li>
              <li><NavLink to="/aboutus">About Us</NavLink></li>

                </ul>
            <div className="Footer-left" >
                <h3>About Us</h3>
                 <p>You read a book, write a detailed review as proof you've read it, and they give you a badge. That's where my competitive nature came out.</p>
            <div className="Footer-right">
                <h3>contact</h3>
                <p>Email:swiftreview@gmail.com</p>
                <p>phone:(+254) 072220220</p>
                
            </div>
            <div classname="Footer-bottom">
            <p>&copy; {new Date().getFullYear( )}All rights reserved.</p>
            
            </div>
            </div>    
            </div>
        </div>

    );
}

export default Footer;