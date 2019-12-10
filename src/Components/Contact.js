import React from "react";

const Contact = props => (

  <div id="contact" className="mt-5 pt-5">
    <div class="mt-5">
      <div class="cf ph2-ns">
        <h2 class="white">Get In Touch</h2>    
        <div class="row">        
          <div class="col-sm-6">
              <div class=" pv4">
                <ul>
                  <li>Github</li>
                  <li>LinkedIn</li>
                  <li>Behance</li>
                </ul>
              </div>
          </div>
          
          <div class="col-sm-6 p-5">
            <form id="contact-form" name="contact-form" action="" method="POST">
              <div class="row">
             
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name" class="">First name</label>
                    <input type="text" id="name" name="name" class="form-control" /> 
                  </div>
                </div>
                   
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="">Last name</label>
                    <input type="text" id="email" name="email" class="form-control" />    
                  </div>
                </div>
                   
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="">Your email</label>
                    <input type="text" id="subject" name="subject" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="">phone</label>
                    <input type="text" id="subject" name="subject" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="">Company</label>
                    <input type="text" id="subject" name="subject" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <label for="message">Your message</label>
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
     

      </div>
    </div>
  </div>
);

export default Contact;






