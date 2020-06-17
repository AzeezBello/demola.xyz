import React from 'react';
import Navbar from './../Navbar/Navbar';
import ScholarX from '../../Img/ScholarX.png';
import NgoNetwork from '../../Img/NgoNetwork.png';


const Projects = () => {
    return(
        <div >
            <Navbar />    
            <div className="pt-5">   
                <h2 className="pt-5 pl-5">My Projects</h2>   
                <div className="row p-4">        
                    <div className="col-sm-6 mb-5">
                        <img src={ScholarX} alt="ScholarX" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 mb-5">
                        <img src={NgoNetwork}  alt="NgoNetwork"  className="img-fluid"  />  
                    </div>
                    <div className="col-sm-6 mb-5">
                        <img src={ScholarX} alt="ScholarX" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 mb-5">
                        <img src={NgoNetwork}  alt="NgoNetwork"  className="img-fluid"  />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;