import React from 'react'
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <footer className='ftr_ctn'>
            <div className='d-flex justify-content-evenly'>
                <div classname="container">
                    <h3>Explore</h3>
                    <ul>
                        <li className='ftr_li'><NavLink className='text-decoration-none ftr_li text-start' to="/review">review</NavLink></li>
                        <li className='ftr_li'><NavLink className='text-decoration-none ftr_li text-start' to="/businesses">Business</NavLink></li>
                        <li className='ftr_li'><NavLink className='text-decoration-none ftr_li text-start' to="/contactus">contact us</NavLink></li>
                        <li className='ftr_li'><NavLink className='text-decoration-none ftr_li text-start' to="/aboutus">About Us</NavLink></li>
                    </ul>
                </div>
                <div className="Footer-left" >
                    <h3>About Us</h3>
                    <p>You read a book, write a detailed review as proof you've read it, and they give you a badge.</p>
                    <p>That's where my competitive nature came out.</p>
                </div>
                <div className="Footer-right">
                    <h3>contact</h3>
                    <p>Email:swiftreview@gmail.com</p>
                    <p>phone:(+254) 072220220</p>
                    
                </div>
            </div>
            <div className='ftr_ctn'>
                <p className='text-center'>&copy; {new Date().getFullYear( )}All rights reserved.</p>
            </div>    
        </footer>

    );
}

export default Footer;