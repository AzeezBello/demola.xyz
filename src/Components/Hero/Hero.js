import React from 'react';
import './hero.css'
import ReactTypingEffect from 'react-typing-effect';
import Navbar from './../Navbar/Navbar';
// import Arrow from './Arrow';
import ScholarX from '../../Img/ScholarX.png';
import NgoNetwork from '../../Img/NgoNetwork.png';

 


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

            {/* <Arrow /> */}

            <div id="projects" class="mt-5 pt-5">
                <div class="p-5 ">
            
                    <h2>    
                        <ReactTypingEffect
                            className="white"
                            staticText="Completed Projects"
                            speed="100"
                            // eraseDelay="5000"
                        />
                    </h2>

                    <div class="row pt-5">        
                        <div class="col-sm-6 dance">
                            <div className="">
                                <img src={ScholarX} alt="ScholarX" className="mt3 img-fluid" />
                            </div>
                        </div>
                        <div class="col-sm-6 dance">
                            <div class="pv4">
                                <img src={NgoNetwork}  alt="NgoNetwork"  className="mt3 img-fluid"  />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero;