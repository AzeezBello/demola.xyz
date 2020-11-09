import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Navbar from './../Navbar/Navbar';
import NgoNetwork from '../../Img/NgoNetwork.png';


const About = () => {
    const switchHeader =["Demola.xyz","The Brand"]
    const switchSubHeader =["Effective product design is an integral part of businesses. We realise the need to enhance brand image, ensuring profit maximization. Our company is a one-stop-shop for all digital services with years of experience in web development, product design, and search engine optimization. Our clients come first; we work closely with clients to ensure we create unique products based on specific requirements. Integrity is the primary core of our business; hence we deliver what we promise, always."]

    return(
        <div >
            <Navbar />    
            <div className="pt-5">   
                <div className="row p-4">        
                    <div className="col-sm-12 mb-5">
                    <div className="typing-header text-center">  
                        <ReactTypingEffect
                            staticText="About"
                            className="header-text"
                            text={switchHeader}
                            speed="50"
                            eraseDelay="9000"
                        />
                        <br />
                
                
                        <ReactTypingEffect
                            className="subheader"
                            text={switchSubHeader}
                            speed="50"
                            eraseDelay="9000"
                        />
                    </div>  
                    </div>
                    {/* <div className="col-sm-6 mb-5">
                        <img src={NgoNetwork}  alt="NgoNetwork"  className="img-fluid"  />   
                    </div> */}
                   
                </div>
            </div>

        </div>
    )
}

export default About;