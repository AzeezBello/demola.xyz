import React from 'react';

import ScholarX from '../Img/ScholarX.png';
import NgoNetwork from '../Img/NgoNetwork.png';



const Projects = () => {
    return(
        <div id="projects" className="mt-5 pt-5">
            <div class="mt-5 pt-5">
                <div class="cf ph2-ns">
                <h2 class="white">Completed Projects</h2>   
                <div class="row">        
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