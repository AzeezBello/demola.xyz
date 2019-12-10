import React from 'react';
import './Navbar.css';
import Logo from '../../Img/logo.png';
// import {
//     BrowserRouter as Router, Link
//   } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="navbar-brand ml3" href="/#" >
                    <img src={Logo} className="navbarimage" alt="..."/> 
                </div> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto navbartextcolor">
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="  #contact">Contacts</a>
                            </li>
                        </ul>
                    </div>
            </nav>

        </div>
    )
}

export default Navbar;