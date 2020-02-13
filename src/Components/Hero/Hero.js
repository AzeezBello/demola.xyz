import React from 'react';
import './hero.css'
import ReactTypingEffect from 'react-typing-effect';
import Navbar from './../Navbar/Navbar';

import LinkedIN from '../../Img/LinkedIN.svg';
import Github from '../../Img/Github.svg';
import Behance from '../../Img/Behance.svg';

 


const Hero = () => {
    const switchHeader =["Hello...","I'm Demola Bello","A software engineer and designer"]
    const switchSubHeader =["Welcome to Demola.xyz","An innovate problem solver","With a track record of providing world class solutions"]

    return (        
        <div className="hero">
            <Navbar />    
            <div className="mt-5 p-5">    
                <div className="pt-5">
                    
                    <ReactTypingEffect
                        className="header-text"
                        text={switchHeader}
                        speed="130"
                        eraseDelay="5000"
                    />

                    <ReactTypingEffect
                        className="subheader"
                        text={switchSubHeader}
                        speed="100"
                        eraseDelay="3000"
                    />
                
                </div>  
            </div>

            <div className="cta">    
                <a href="/village" >
                    <button type="button" className="btn btn-lg btn-primary">View Portfolio</button>
                </a>
                <a href="https://drive.google.com/open?id=1juDl-BvM4UF_hPA6j8IpuXWYq7hBUh7R" className="ml-4"><b>Download Resume &rarr;</b></a>     
            </div>

            <div className="icons">
                <ul>
                    <li><a href='https://github.com/AzeezBello'><img src={Github} className="navbarimage" alt="Github"/> </a></li>
                    <li><a href='https://www.linkedin.com/in/azeez-bello-48205a11a'><img src={LinkedIN} className="navbarimage" alt="LinkedIn"/></a></li>
                    <li><a href='https://www.behance.net/demolablaze'><img src={Behance} className="navbarimage" alt="Behance"/></a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Hero;