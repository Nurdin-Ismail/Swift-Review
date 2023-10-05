import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {

    function handleClick(e){
        e.preventDefault();
    }

    return (
        <div>
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid nav_sctn">
                    <NavLink className="navbar-brand Navlink" exact to="/" id='name'>SwiftReviews</NavLink>

                    <form className="d-flex" id='search'>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
                    </form>

                    <div className="navmargin collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="ms -5 nav-link dropdown-toggle Navlink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Restaurants
                                </a>
                                <ul className="dropdown-menu Nav_ctn">
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Kenyan</NavLink></li>
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Italian</NavLink></li>
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Indian</NavLink></li>
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Chinese</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle Navlink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Auto Services
                                </a>
                                <ul className="dropdown-menu Nav_ctn">
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Auto Repair</NavLink></li>
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Car Wash</NavLink></li>
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Car Dealers</NavLink></li>
                                    <li className='drp_txt'><NavLink className="text-decoration-none drp_txt" to="#">Parking</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <span className="nav-link ms-3">
                            <NavLink className="text-decoration-none drp_txt Navlink" to="/add-business"><i className="fas fa-plus"></i> Add A Business</NavLink>
                        </span>
                    </div>
                    
                    <div className="navbar-nav ms-auto" id='user'>
                        <NavLink className="nav-link ms-3 Navlink" to="/login">
                            <i className="fas fa-sign-in-alt"></i> Login
                        </NavLink>
                        <NavLink className="nav-link ms-3 Navlink" to="/signup">
                            <i className="fas fa-user-plus"></i> Signup
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
