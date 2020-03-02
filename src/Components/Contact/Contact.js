import React from "react";
import './contact.css';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import Navbar from './../Navbar/Navbar';

const Contact = props => (

  <div id="contact" className="">
    <Navbar />    
    
    <div class="m-5">
      <div>
        <ReactTypeformEmbed url="https://demolablaze.typeform.com/to/vvKMQ0" />
      </div>
    </div>

  </div>
);

export default Contact;






    
