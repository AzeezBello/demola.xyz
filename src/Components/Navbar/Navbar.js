import React from 'react';
import './Navbar.css';
import Logo from '../../Img/Ade.png';
import {
    BrowserRouter as Router, Link
  } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/">
                <div className="navbar-brand ml3" >
                    <img src={Logo} className="navbarimage" alt="Logo"/> 
                </div> 
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto navbartextcolor">
                        <li className="nav-item">
                                <Link to="/">
                                    <span className="nav-link" href="#about">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projects">
                                    <span className="nav-link" href="#projects">Portfolio</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact">
                                    <span className="nav-link" href="  #contact">Contacts</span>
                                </Link>    
                            </li>
                        </ul>
                    </div>
            </nav>

            
        </div>
    )
}

export default Navbar;