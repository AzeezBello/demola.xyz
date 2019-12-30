import React from "react";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

import Navbar from './Navbar/Navbar';
import demola from '../Img/demola.png';
import LinkedIN from '../Img/LinkedIN.svg';
import Github from '../Img/Github.svg';
import Behance from '../Img/Behance.svg';


const Contact = props => (

  <div id="contact" className="">
    <Navbar />    
    <div class="pt-5">
      <div class="p-5 cf ph2-ns">
           
        <div class="row">        
          <div class="col-sm-6">
          <img src={demola}  alt="Demola"/>
              <div class=" pv4">
                <div className="icons">
                  <ul>
                    <li><img src={Github} className="navbarimage" alt="Github"/><a href='https://github.com/AzeezBello'> Github </a></li>
                    <li><img src={LinkedIN} className="navbarimage" alt="LinkedIn"/><a href='https://www.linkedin.com/in/azeez-bello-48205a11a'> LinkedIn</a></li>
                    <li><img src={Behance} className="navbarimage" alt="Behance"/><a href='https://www.behance.net/demolablaze'>Behance</a></li>
                  </ul>
                </div>
              </div>
          </div>
          
          <div class="col-sm-6 p-5">
          <Container className="App">
            <h2 className="white">Send me a Message</h2>
            <Form className="form pt-5">
            <Col>
                <FormGroup>
                  <Label for="examplePassword">Full Name</Label>
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="John Doe"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="int"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+2347064463920"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="I would like to ......"
                  />
                </FormGroup>
              </Col>
              <Button >Submit</Button>
            </Form>
          </Container>
          </div>
        </div>
     

      </div>
    </div>


  </div>
);

export default Contact;






    
