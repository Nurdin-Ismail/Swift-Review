import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {

    function handleClick(e){
        e.preventDefault();
    }

    return (
        <div className='nav1'>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/" id='name'>SwiftReviews</NavLink>

                    <form className="d-flex" id='search'>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
                    </form>

                    <div className="navmargin collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="ms -5 nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Restaurants
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="#">Kenyan</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Italian</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Indian</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Chinese</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Auto Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="#">Auto Repair</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Car Wash</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Car Dealers</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Parking</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <a className="nav-link ms-3" href="#">
                            <i className="fas fa-plus"></i> Add A Business
                        </a>
                    </div>
                    
                    <div className="navbar-nav ms-auto" id='user'>
                        <NavLink className="nav-link ms-3" to="/login">
                            <i className="fas fa-sign-in-alt"></i> Login
                        </NavLink>
                        <NavLink className="nav-link ms-3" to="/signup">
                            <i className="fas fa-user-plus"></i> Signup
                        </NavLink>
                    </div>
                </div>
            </nav>


        </div>
        
    )
}

export default NavBar;
