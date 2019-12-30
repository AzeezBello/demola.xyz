import React from 'react';
import Navbar from './Navbar/Navbar';
import ScholarX from '../Img/ScholarX.png';
import NgoNetwork from '../Img/NgoNetwork.png';



const Projects = () => {
    return(
        <div >
        <Navbar />    
            <div class="pt-5">
                <div class="pt-5 cf ph2-ns">
                <h2 class="white pt-5 pl-5">My Projects</h2>   
                <div class="row p-5 ">        
                        <div class="col-sm-6">
                            <div class=" pv4">
                            <img src={ScholarX} alt="ScholarX" className="mt3" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="pv4">
                                <img src={NgoNetwork}  alt="NgoNetwork"  className="mt3"  />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class=" pv4">
                            <img src={ScholarX} alt="ScholarX" className="mt3" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="pv4">
                                <img src={NgoNetwork}  alt="NgoNetwork"  className="mt3"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;