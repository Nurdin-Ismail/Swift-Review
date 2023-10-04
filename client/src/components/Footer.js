import React from 'react'

function Footer() {
    return (
        <div>
        <footer classname="footer"/>
            <div classname="container">
                <h3>Explore</h3>
                <ul>
              <li>< a href="/review">review</a></li>
              <li>< a href="/business">Business</a></li>
              <li>< a href="/contact-us">contact us</a></li>
              <li>< a href="/about-us">About Us</a></li>

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