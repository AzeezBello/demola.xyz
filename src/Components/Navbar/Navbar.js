import React from 'react';
import './Navbar.css';
import Logo from '../../Img/leo-lion-head-side.svg';
import {
    BrowserRouter as Router, Link
  } from "react-router-dom";


const Navbar = () => {
    return(
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/">
                <div className="navbar-brand ml3" href="/#" >
                    <img src={Logo} className="navbarimage" alt="..."/> 
                </div> 
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto navbartextcolor">
                        <li className="nav-item">
                                <Link to="/">
                                    <a className="nav-link" href="#about">About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projects">
                                    <a className="nav-link" href="#projects">Portfolio</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact">
                                    <a className="nav-link" href="  #contact">Contacts</a>
                                </Link>    
                            </li>
                        </ul>
                    </div>
            </nav>

        </div>
    )
}

export default Navbar;