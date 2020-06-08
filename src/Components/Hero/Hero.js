import React from 'react';
import './hero.css'
import ReactTypingEffect from 'react-typing-effect';
import Navbar from './../Navbar/Navbar';

import LinkedIN from '../../Img/LinkedIN.svg';
import Github from '../../Img/Github.svg';
import Behance from '../../Img/Behance.svg';

 

const Hero = () => {
    const switchHeader =["Hello...","I'm Demola Bello"]
    const switchSubHeader =["Welcome to Demola.xyz"]

    return (        
        <div className="hero">
            <Navbar />    
            <div className="mt-5 p-5">    
                <div className="typing-header pt-5">  
                    <ReactTypingEffect
                        className="header-text"
                        text={switchHeader}
                        speed="50"
                        // eraseDelay="2000"
                    />
                    <br />

                    <ReactTypingEffect
                        className="subheader"
                        text={switchSubHeader}
                        speed="50"
                    />
                </div>  
            </div>

            <div className="cta">
                <div class="row mx-auto">        
                    <div class="col-sm-6 p-2">    
                        <a href="/Projects" >
                            <button type="button" className="btn btn-lg btn-primary ">View Portfolio &rarr;</button>
                        </a>
                    </div>
                    <div class="col-sm-6 p-2">      
                        <a href="https://drive.google.com/open?id=1juDl-BvM3UF_hPA6j8IpuXWYq7hBUh7R">
                            <button type="button" className="btn btn-lg btn-outline-primary">Download Resume &rarr;</button>
                        </a> 
                    </div>    
                </div>
            </div>

            <div className="icons row mt-3">
                <div class="col p-2"> 
                    <a href='https://github.com/AzeezBello'><img src={Github}  alt="Github"/> </a>
                </div>
                <div class="col p-2"> 
                    <a href='https://www.linkedin.com/in/azeez-bello-48205a11a'><img src={LinkedIN}  alt="LinkedIn"/></a>
                </div>
                <div class="col p-2"> 
                    <a href='https://www.behance.net/demolablaze'><img src={Behance} alt="Behance"/></a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Hero;