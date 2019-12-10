import React from 'react';
import 'tachyons';
import './App.css';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Arrow from './Components/Arrow';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar/Navbar';
// import Scroll from './scroll.png';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.sayHello = this.sayHello.bind(this);
  // }

  // sayHello() {
  //   document.querySelector('.thebutton').onclick = function (){
  //     document.querySelector('.downpart').style.display = 'block';
  //   }
  // }
  

  render () {
    return (
      <div className="bg-black"> 
        <Navbar />      
        <Hero />
        <Arrow />
        <Projects />
        <Contact /> 
      </div>
    )
  }
}

export default App;