import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id='name'>SwiftReviews</a>

                <form className="d-flex" id='search'>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div className="navmargin collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="ms -5 nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Restaurants
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Kenyan</a></li>
                                <li><a className="dropdown-item" href="#">Italian</a></li>
                                <li><a className="dropdown-item" href="#">Indian</a></li>
                                <li><a className="dropdown-item" href="#">Chinese</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Auto Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Auto Repair</a></li>
                                <li><a className="dropdown-item" href="#">Car Wash</a></li>
                                <li><a className="dropdown-item" href="#">Car Dealers</a></li>
                                <li><a className="dropdown-item" href="#">Parking</a></li>
                            </ul>
                        </li>
                    </ul>
                    <a className="nav-link ms-3" href="#">
                        <i className="fas fa-plus"></i> Add A Business
                    </a>
                </div>
                
                <div className="navbar-nav ms-auto" id='user'>
                    <a className="nav-link ms-3" href="#">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </a>
                    <a className="nav-link ms-3" href="#">
                        <i className="fas fa-user-plus"></i> Signup
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
