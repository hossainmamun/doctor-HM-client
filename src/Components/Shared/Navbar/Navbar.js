import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../../../StyleSheet/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { globalContext } from '../../../App.js';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(globalContext)
    return (
            <nav class="navbar navbar-expand-lg navigation fixed-top">
                <div class="container-fluid">
                    <Link to="/home" class="navbar-brand">DOCTOR-HM</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto d-flex align-items-center">
                            <li class="nav-item">
                                <Link smooth to="/home#home" class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="/home#about" class="nav-link">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="/home#service" class="nav-link">Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="/home#reviews" class="nav-link">Review</Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="/home#blogs" class="nav-link">Blog</Link>
                            </li>
                            {
                                loggedInUser.email &&
                                <li class="nav-item">
                                    <Link to="/dashboard" class="nav-link">Dashboard</Link>
                                </li>
                            }

                            <li class="nav-item ">
                                {
                                    loggedInUser.email ?
                                        <div>
                                            <span className='text-capitalize text-warning me-3'>{loggedInUser.name}</span>
                                            <button className='btn btn-danger px-3' onClick={() => setLoggedInUser({})}>SignOut</button>
                                        </div> :
                                        <Link to="/account" class="nav-link btn btn-success px-3">Account</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;