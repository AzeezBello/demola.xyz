import React from "react";
import { TweenMax, TimelineMax, Power2, Elastic } from "gsap/TweenMax";
import './Pagination.css';

const Pagination = props => {

  let xmlns = "http://www.w3.org/2000/svg", xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    size = 8;

  TweenMax.set('svg', {
    visibility: 'visible'
  });

  // console.log(size);
  window.onload = function(){

  select('#joinLine').setAttribute('stroke-width', size); 
  document.getElementById("joinLine").setAttribute("stroke-width",size);
  var maskSource = select('#circleGroup').cloneNode(true);
  maskSource.id = '';
  maskSource.setAttribute('fill', '#FFF');
  maskSource.setAttribute('stroke', '#777777');
  maskSource.setAttribute('stroke-width', 5);
  select('#radioMask').appendChild(maskSource);
  select('#mainGroup').setAttribute('mask', 'url(#radioMask)');
  document.body.onclick = function(e){
    
    var target = e.target;
    if(target.tagName === 'circle'){
      
      var id = target.id;
      
      var tl = new TimelineMax();
      tl.to('#joinLine', 0.3, {
        attr:{
          y2:target.getAttribute('cy')
        },
        strokeWidth:0,
        ease:Power2.easeIn
      }).to('#joinLine', 1, {
        attr:{
          y1:target.getAttribute('cy')
        },
        ease:Elastic.easeOut.config(1, 0.76)
      }, '+=0')
        .to('#joinLine', 2, {
        strokeWidth:size,
        ease:Elastic.easeOut.config(1, 0.8)
      }, '-=1');   
      
      tl.timeScale(2);
    }
  };
   /** all code goes here **/};

    return(
        <div class='pagination'>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600">
            <defs><mask id="radioMask"></mask></defs>
            <g id="mainGroup">
              <g id="circleGroup" fill="transparent" stroke-width="4" stroke-miterlimit="10">
                <circle  cx="30" cy="122" r="6"/>
               <a href=""><circle  cx="30" cy="184" r="6"/></a>
               <a href="#stakeholders"><circle  cx="30" cy="248" r="6"/></a>
               <a href=""><circle  cx="30" cy="310" r="6"/></a>
              </g>  
              <line id="joinLine" fill="none" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" x1="30" y1="122" x2="30" y2="122"/>
            </g>
          </svg>
        </div>
    )
};


export default Pagination;
